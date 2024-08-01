import React from 'react';

function AboutUs() {
  return (
    <div id="aboutus" className="container bg-gray-200 mx-auto my-8 flex items-center justify-between">
      <div className="w-1/2 p-4">
        <h2 className="text-3xl mb-4 flex justify-center">O nas</h2>
        <div className="flex justify-center m-10">
        <img src="../assets/Decoration.svg"></img>
      </div>
        <p className="flex justify-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula urna at risus tincidunt, nec interdum arcu volutpat.</p>
        <img className="flex ml-auto mt-4" src="../assets/Signature.svg" alt="Signature" />
      </div>
      <div className="w-1/2 p-4">
        <img src="../assets/People.jpg" alt="About Us" className="w-full h-auto"/>
      </div>
    </div>
  );
}

export default AboutUs;
