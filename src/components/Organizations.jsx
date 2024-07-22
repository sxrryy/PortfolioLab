import React, { useState } from "react";

function Organizations() {
  const [page, setPage] = useState(1);
  const organizations = [
    [
      "Fundacja 'Lorem Ipsum'",
      "Organizacja pozarządowa 1",
      "Lokalna zbiórka 1",
    ],
    [
      "Fundacja 'Dolor Sit Amet'",
      "Organizacja pozarządowa 2",
      "Lokalna zbiórka 2",
    ],
    [
      "Fundacja 'Consectetur Adipiscing'",
      "Organizacja pozarządowa 3",
      "Lokalna zbiórka 3",
    ],
  ];

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => handlePageChange(1)}
          className="mx-2 p-2 bg-white border border-black border-solid text-black"
        >
          Fundacje
        </button>
        <button
          onClick={() => handlePageChange(2)}
          className="mx-2 p-2 bg-white border border-black border-solid text-black"
        >
          Organizacje pozarządowe
        </button>
        <button
          onClick={() => handlePageChange(3)}
          className="mx-2 p-2 bg-white border border-black border-solid text-black"
        >
          Lokalne zbiórki
        </button>
      </div>
      <div>
        {organizations[page - 1].map((org, index) => (
          <p key={index} className="my-2">
            {org}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Organizations;
