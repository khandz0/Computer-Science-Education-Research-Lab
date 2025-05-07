import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter basename="/Computer-Science-Education-Research-Lab">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
