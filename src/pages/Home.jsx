import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Organizations from "../components/Organizations";

function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <section>
          <h2 className="text-2xl mb-4">Komu pomagamy?</h2>
          <Organizations />
        </section>
        <section className="mt-8">
          <h2 className="text-2xl mb-4">Kontakt</h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default Home;
