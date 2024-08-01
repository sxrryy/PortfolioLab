import React from "react";
import { useNavigate } from "react-router-dom";

function Banner() {
  {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
      navigate("/login");
    };

    return (
      <div
        className="relative max-w-8xl mx-auto mt-10 h-96 lg:h-auto bg-contain bg-no-repeat overflow-hidden"
        style={{
          height: "750px",
          backgroundImage: "url('../assets/Home-Hero-Image.jpg')",
        }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative w-full lg:w-2/3 p-12 flex-col justify-center text-center ml-auto">
          <h2 className="text-4xl mb-8">
            Zacznij pomagać!<br></br>Oddaj niechciane rzeczy w zaufane ręce.
          </h2>
          <div className="flex justify-center mb-10">
            <img src="../assets/Decoration.svg"></img>
          </div>
          <button
            onClick={handleLoginRedirect}
            className="bg-white text-black border border-solid border-black p-2 m-3"
          >
            ODDAJ RZECZY
          </button>

          <button
            onClick={handleLoginRedirect}
            className="bg-white text-black border border-solid border-black p-2"
          >
            ZORGANIZUJ ZBIÓRKĘ
          </button>
        </div>
      </div>
    );
  }
}

export default Banner;
