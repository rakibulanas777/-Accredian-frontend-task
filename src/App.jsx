import { useState } from "react";
import ReferralForm from "./components/ReferralForm";
import Home from "./pages/Home";

function App() {

  const [isModalOpen, setModalOpen] = useState(false);

  const handleReferClick = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const handleFormSubmit = (data) => {
    console.log(data);
    setModalOpen(false);
  };

  return (
    <>
      <Home onReferClick={handleReferClick} />
      <ReferralForm open={isModalOpen} onClose={handleModalClose} onSubmit={handleFormSubmit} />
    </>
  );
}

export default App
