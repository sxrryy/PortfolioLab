import React from "react";
import { useNavigate } from "react-router-dom";

function Steps() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const steps = [
    {
      title: "Wybierz rzeczy",
      description: "Ubrania, zabawki, sprzęt i inne",
      icon: "../assets/Icon-1.svg",
    },
    {
      title: "Spakuj je",
      description: "Skorzystaj z worków na śmieci",
      icon: "../assets/Icon-2.svg",
    },
    {
      title: "Zdecyduj komu chcesz pomóc",
      description: "Wybierz zaufane miejsce",
      icon: "../assets/Icon-3.svg",
    },
    {
      title: "Zamów kuriera",
      description: "Kurier przyjedzie w dogodnym terminie",
      icon: "../assets/Icon-4.svg",
    },
  ];

  return (
    <div className="container mx-auto my-20">
      <h2 className="text-3xl text-center mb-8">Wystarczą 4 proste kroki</h2>
      <div className="flex justify-center">
        <img src="../assets/Decoration.svg"></img>
      </div>
      <div className="flex justify-around bg-gray-200 py-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <img src={step.icon} alt={step.title} className="mx-auto mb-4" />
            <h3 className="text-xl mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={handleLoginRedirect}
          className="bg-white text-black border border-solid border-black p-2"
        >
          ODDAJ RZECZY
        </button>
      </div>
    </div>
  );
}

export default Steps;
