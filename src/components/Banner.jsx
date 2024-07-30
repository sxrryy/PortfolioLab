import React from "react";
import { useNavigate } from "react-router-dom";

function Banner() {
  {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
      navigate("/login");
    };

    return (
      <div className="h-64 flex items-center justify-end bg-gray-100 overflow-hidden">
        <div
          className="container absolute left-0 top-0 w-1/2 h-1/2 bg-auto bg-left"
          style={{ backgroundImage: "url('../assets/Home-Hero-Image.jpg')" }}
        ></div>
        <div className="relative w-1/2 flex flex-col items-start justify-center p-8">
          <h2 className="text-4xl mb-4">Zacznij pomagać!</h2>
          <p className="text-xl">Oddaj niechciane rzeczy w zaufane ręce</p>
          <div className="flex justify-center m-3">
            <img src="../assets/Decoration.svg"></img>
          </div>
          <br></br>
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
