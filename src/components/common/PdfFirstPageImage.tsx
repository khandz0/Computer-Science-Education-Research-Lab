import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as pdfjsLib from "pdfjs-dist";
import { X, Expand } from "lucide-react";

// Use CDN worker so hosting (e.g. Hostinger) doesn't need to serve .mjs
const PDFJS_WORKER_VERSION = "5.5.207";
if (typeof window !== "undefined") {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${PDFJS_WORKER_VERSION}/build/pdf.worker.min.mjs`;
}

interface PdfFirstPageImageProps {
  pdfUrl: string;
  alt: string;
  className?: string;
}

const PdfFirstPageImage: React.FC<PdfFirstPageImageProps> = ({
  pdfUrl,
  alt,
  className = "w-full h-48 object-cover",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const expandedCanvasRef = useRef<HTMLCanvasElement>(null);
  const pageRef = useRef<unknown>(null);
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const [expanded, setExpanded] = useState(false);
  const [expandedStatus, setExpandedStatus] = useState<"idle" | "loading" | "loaded">("idle");

  useEffect(() => {
    if (!pdfUrl) {
      setStatus("error");
      return;
    }

    let cancelled = false;

    const loadPdf = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument({ url: pdfUrl });
        const pdf = await loadingTask.promise;
        if (cancelled) return;

        const page = await pdf.getPage(1);
        if (cancelled) return;

        pageRef.current = page;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const scale = 2;
        const viewport = page.getViewport({ scale });
        const context = canvas.getContext("2d");
        if (!context) return;

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderTask = page.render({
          canvasContext: context,
          canvas,
          viewport,
        });
        await (renderTask as { promise: Promise<void> }).promise;

        if (!cancelled) setStatus("loaded");
      } catch {
        if (!cancelled) setStatus("error");
      }
    };

    loadPdf();
    return () => {
      cancelled = true;
    };
  }, [pdfUrl]);

  useEffect(() => {
    if (!expanded || expandedStatus !== "idle" || !pageRef.current) return;

    const page = pageRef.current as {
      getViewport: (opts: { scale: number }) => { width: number; height: number };
      render: (opts: { canvasContext: CanvasRenderingContext2D; canvas: HTMLCanvasElement; viewport: { width: number; height: number } }) => { promise: Promise<void> };
    };
    const canvas = expandedCanvasRef.current;
    if (!canvas) return;

    setExpandedStatus("loading");

    const renderExpanded = async () => {
      const scale = Math.min(2.5, (window.innerWidth * 0.9) / page.getViewport({ scale: 1 }).width);
      const viewport = page.getViewport({ scale });
      const context = canvas.getContext("2d");
      if (!context) {
        setExpandedStatus("idle");
        return;
      }

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      try {
        const renderTask = page.render({
          canvasContext: context,
          canvas,
          viewport,
        });
        await renderTask.promise;
        setExpandedStatus("loaded");
      } catch {
        setExpandedStatus("idle");
      }
    };

    renderExpanded();
  }, [expanded, expandedStatus]);

  useEffect(() => {
    if (!expanded) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [expanded]);

  if (status === "error") {
    return (
      <div
        className={`flex items-center justify-center bg-sjsu-lightgray text-gray-500 ${className}`}
        aria-label={alt}
      >
        <span className="text-sm">Preview unavailable</span>
      </div>
    );
  }

  const openExpanded = () => {
    if (status === "loaded") {
      setExpandedStatus("idle");
      setExpanded(true);
    }
  };

  const closeExpanded = () => {
    setExpanded(false);
    setExpandedStatus("idle");
  };

  return (
    <>
      <button
        type="button"
        onClick={openExpanded}
        className={`relative overflow-hidden bg-sjsu-lightgray ${className} block w-full text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-sjsu-gold focus:ring-offset-2 rounded-t-lg`}
        disabled={status !== "loaded"}
        aria-label={`Expand preview: ${alt}`}
      >
        {status === "loading" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm text-gray-500">Loading…</span>
          </div>
        )}
        {status === "loaded" && (
          <span className="absolute top-2 right-2 rounded-full bg-black/50 p-1.5 text-white" aria-hidden>
            <Expand className="h-4 w-4" />
          </span>
        )}
        <canvas
          ref={canvasRef}
          className="w-full object-cover object-top pointer-events-none"
          style={{
            display: status === "loaded" ? "block" : "none",
            height: "200%",
            minHeight: "24rem",
          }}
          aria-hidden
        />
      </button>

      {expanded &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90"
            onClick={closeExpanded}
            role="dialog"
            aria-modal="true"
            aria-label={`Full first page: ${alt}`}
          >
            <div
              className="relative bg-white rounded-lg shadow-2xl max-h-[90vh] max-w-[90vw] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeExpanded}
                className="absolute top-2 right-2 z-10 rounded-full bg-sjsu-navy text-white p-2 hover:bg-sjsu-blue focus:outline-none focus:ring-2 focus:ring-sjsu-gold"
                aria-label="Close preview"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="p-4 pt-12 bg-white">
                {expandedStatus === "loading" && (
                  <div className="flex items-center justify-center min-h-[400px] text-gray-500">
                    Loading…
                  </div>
                )}
                <canvas
                  ref={expandedCanvasRef}
                  className="max-w-full h-auto opacity-100"
                  style={{ display: expandedStatus === "loaded" ? "block" : "none" }}
                  aria-hidden
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default PdfFirstPageImage;
