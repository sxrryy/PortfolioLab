import React, { useState } from "react";

const Organizations = () => {
  const [selectedCategory, setSelectedCategory] = useState("fundations");
  const [currentPage, setCurrentPage] = useState(1);

  const data = {
    fundations: [
      {
        name: 'Fundacja "Dbam o Zdrowie"',
        description:
          "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
      },
      {
        name: 'Fundacja "Dla dzieci"',
        description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
        items: "ubrania, meble, zabawki",
      },
      {
        name: 'Fundacja "Bez domu"',
        description:
          "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
        items: "ubrania, jedzenie, ciepłe koce",
      },
      {
        name: 'Fundacja "Lorem Ipsum 4"',
        description: "Cel i misja: Opis fundacji.",
        items: "rzeczy 1, rzeczy 2, rzeczy 3",
      },
      {
        name: 'Fundacja "Lorem Ipsum 5"',
        description: "Cel i misja: Opis fundacji.",
        items: "rzeczy 1, rzeczy 2, rzeczy 3",
      },
      {
        name: 'Fundacja "Lorem Ipsum 6"',
        description: "Cel i misja: Opis fundacji.",
        items: "rzeczy 1, rzeczy 2, rzeczy 3",
      },
      {
        name: 'Fundacja "Lorem Ipsum 7"',
        description: "Cel i misja: Opis fundacji.",
        items: "rzeczy 1, rzeczy 2, rzeczy 3",
      },
      {
        name: 'Fundacja "Lorem Ipsum 8"',
        description: "Cel i misja: Opis fundacji.",
        items: "rzeczy 1, rzeczy 2, rzeczy 3",
      },
      {
        name: 'Fundacja "Lorem Ipsum 9"',
        description: "Cel i misja: Opis fundacji.",
        items: "rzeczy 1, rzeczy 2, rzeczy 3",
      },
    ],
    organizations: [
      {
        name: 'Organizacja "Lorem Ipsum 1"',
        description:
          "Quis varius quam quisque id diam vel quam elementum pulvinar.",
        items: "Egestas, sed, tempus",
      },
      {
        name: 'Organizacja "Lorem Ipsum 2"',
        description:
          "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
        items: "Ut, aliquam, purus, sit, amet",
      },
      {
        name: 'Organizacja "Lorem Ipsum 3"',
        description: "Scelerisque in dictum non consectetur a erat nam.",
        items: "Mi, quis, hendrerit, dolor",
      },
      {
        name: 'Organizacja "Lorem Ipsum 4"',
        description:
          "Quis varius quam quisque id diam vel quam elementum pulvinar.",
        items: "Egestas, sed, tempus",
      },
      {
        name: 'Organizacja "Lorem Ipsum 5"',
        description:
          "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
        items: "Ut, aliquam, purus, sit, amet",
      },
      {
        name: 'Organizacja "Lorem Ipsum 6"',
        description: "Scelerisque in dictum non consectetur a erat nam.",
        items: "Mi, quis, hendrerit, dolor",
      },
    ],
    locals: [
      {
        name: 'Zbiórka "Lorem Ipsum 1"',
        description:
          "Quis varius quam quisque id diam vel quam elementum pulvinar.",
        items: "Egestas, sed, tempus",
      },
      {
        name: 'Zbiórka "Lorem Ipsum 2"',
        description:
          "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
        items: "Ut, aliquam, purus, sit, amet",
      },
      {
        name: 'Zbiórka "Lorem Ipsum 3"',
        description: "Scelerisque in dictum non consectetur a erat nam.",
        items: "Mi, quis, hendrerit, dolor",
      },
    ],
  };

  const itemsPerPage = 3;
  const pageCount = Math.ceil(data[selectedCategory].length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data[selectedCategory].slice(startIndex, endIndex);

  return (
    <div
      id="organizations"
      className="organizations text-center mt-36 max-w-3xl mx-auto"
    >
      <h2 className="text-4xl mb-6">Komu pomagamy?</h2>
      <div className="flex justify-center mb-10">
        <img src="../assets/Decoration.svg"></img>
      </div>
      <div className="category-buttons mb-10 flex justify-center gap-4">
        <button
          onClick={() => {
            setSelectedCategory("fundations");
            setCurrentPage(1);
          }}
          className={`text-xl px-4 py-2 ${
            selectedCategory === "fundations"
              ? "bg-white border border-solid border-black text-black"
              : "bg-white text-black"
          } hover:bg-gray-300`}
        >
          Fundacjom
        </button>
        <button
          onClick={() => {
            setSelectedCategory("organizations");
            setCurrentPage(1);
          }}
          className={`text-xl px-4 py-2 ${
            selectedCategory === "organizations"
              ? "bg-white border border-solid border-black text-black"
              : "bg-white text-black"
          } hover:bg-gray-300`}
        >
          Organizacjom pozarządowym
        </button>
        <button
          onClick={() => {
            setSelectedCategory("locals");
            setCurrentPage(1);
          }}
          className={`text-xl px-4 py-2 ${
            selectedCategory === "locals"
              ? "bg-white border border-solid border-black text-black"
              : "bg-white text-black"
          } hover:bg-gray-300`}
        >
          Lokalnym zbiórkom
        </button>
      </div>
      <p className="text-lg mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <div className="items-list">
        {currentItems.map((item, index) => (
          <div key={index} className="item mb-6">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-md">{item.description}</p>
            <span className="text-sm text-gray-600">{item.items}</span>
          </div>
        ))}
      </div>
      {pageCount > 1 && (
        <div className="pagination flex justify-center mt-4">
          {[...Array(pageCount)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`mx-1 px-3 py-1 ${
                currentPage === index + 1
                  ? "bg-white border border-solid border-black text-black"
                  : "bg-white text-black"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Organizations;
