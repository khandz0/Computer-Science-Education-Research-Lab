import React, { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/common/Container";
import Section from "../components/common/Section";
import Button from "../components/common/Button";
import { Mail, MapPin, Send, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Please fill out all required fields.",
      });
      return;
    }

    try {
      await emailjs.send(
        "csedresearchSJSUService",
        "csedresearchSJSUTemplate",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "HEyS9dW25L774R9Ts"
      );

      setFormStatus({
        submitted: true,
        success: true,
        message: "Your message has been sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    }
  };

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our research team"
      />

      <Container className="py-12">
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-sjsu-navy mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-sjsu-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-sjsu-navy mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a
                        href="mailto:contact@bprl.edu"
                        className="hover:text-sjsu-blue"
                      >
                        csedresearchsjsu@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <Phone className="h-6 w-6 text-sjsu-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-sjsu-navy mb-1">Phone</h3>
                    <p className="text-gray-600">(408) 123-4567</p>
                  </div>
                </div> */}

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-sjsu-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-sjsu-navy mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      {/* Computer Science Education Research Lab
                      <br /> */}
                      San José State University
                      <br />
                      1 Washington Square
                      <br />
                      San José, CA 95192
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="mt-8">
                <h3 className="text-xl font-semibold text-sjsu-navy mb-4">
                  Office Hours
                </h3>
                <p className="text-gray-600 mb-2">
                  Our lab is open for visitors during the following hours:
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                  <li>Saturday & Sunday: Closed</li>
                </ul>
                <p className="text-gray-600 mt-2 italic">
                  Note: Please email in advance to schedule an appointment.
                </p>
              </div> */}

              {/* <div className="mt-8">
                <h3 className="text-xl font-semibold text-sjsu-navy mb-4">
                  Campus Map
                </h3>
                <div className="aspect-w-16 aspect-h-9 bg-sjsu-lightgray rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Campus Map"
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-gray-600 mt-2 text-sm">
                  Our lab is located in the Engineering Building (ENG), Room
                  281.
                </p>
              </div> */}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sjsu-navy mb-6">
                Send us a Message
              </h2>

              {formStatus?.success && (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
                  <p className="flex items-center">
                    <Send className="h-5 w-5 mr-2" />
                    {formStatus.message}
                  </p>
                </div>
              )}

              {formStatus?.success === false && (
                <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
                  <p className="flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    {formStatus.message}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sjsu-blue focus:border-sjsu-blue"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sjsu-blue focus:border-sjsu-blue"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sjsu-blue focus:border-sjsu-blue"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Research Collaboration">
                      Research Collaboration
                    </option>
                    <option value="Student Opportunities">
                      Student Opportunities
                    </option>
                    <option value="Media Request">Media Request</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sjsu-blue focus:border-sjsu-blue"
                    required
                  ></textarea>
                </div>

                <div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full md:w-auto flex items-center justify-center"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
};

export default ContactPage;
