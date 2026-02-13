import Header from "../components/header/header";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
      <main className="bg-white">
         <Header />
        <section className="mx-auto max-w-4xl px-6 py-16">
          {children}
        </section>
      </main>
    );
  }