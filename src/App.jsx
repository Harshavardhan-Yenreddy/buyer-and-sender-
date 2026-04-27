import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import JoinPage from "./pages/JoinPage";
import BuyerForm from "./pages/BuyerForm";
import FranchisorForm from "./pages/FranchisorForm";
import DataSources from "./pages/DataSources";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JoinPage />} />
        <Route path="/buyer" element={<BuyerForm />} />
        <Route path="/franchisor" element={<FranchisorForm />} />
        <Route path="/data-sources" element={<DataSources />} />
      </Routes>
    </Router>
  );
}