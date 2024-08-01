import React from "react";
import Banner from "../components/Banner";
import Steps from "../components/Steps";
import Organizations from "../components/Organizations";
import ContactForm from "../components/ContactForm";
import AboutUs from "../components/AboutUs";
import Statistics from "../components/Statistics";

function Home() {
  return (
    <div>
      <Banner />
      <Statistics />
      <main className="container mx-auto p-4">
        <Steps />
        <AboutUs />
        <section>
          <Organizations />
        </section>
        <section className="mt-8">
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default Home;
