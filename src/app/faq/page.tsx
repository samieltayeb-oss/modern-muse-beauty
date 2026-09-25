import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function FAQPage() {
  const faqs = [
    {
      q: "Do you accept male clients?",
      a: "Modern Muse Beauty is a holistic wellness studio and currently only accepts female clients."
    },
    {
      q: "What is Kobido Japanese Facial Massage?",
      a: "Known as the “ancient way of beauty,” this massage stimulates circulation, boosts collagen production, and promotes lymphatic drainage, leaving the face glowing, sculpted, and refreshed."
    },
    {
      q: "Are you a Registered Massage Therapist (RMT)?",
      a: "No, the treatments are performed by a specialized Esthetician focusing on advanced bodywork and beauty therapies. We do not provide RMT receipts."
    },
    {
      q: "Where are you located?",
      a: "We are located at 909 5 Ave SW in Calgary, Alberta. There is parking available near the studio."
    }
  ];

  return (
    <main className="relative min-h-screen selection:bg-muse-nude selection:text-muse-ink pt-32">
      <Navbar />
      
      <section className="container mx-auto px-6 md:px-12 py-24 max-w-4xl">
        <h1 className="font-serif text-6xl md:text-8xl tracking-tight mb-24 text-center">
          Questions.
        </h1>

        <div className="flex flex-col gap-12">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-muse-stone/30 pb-12">
              <h3 className="font-serif text-2xl md:text-3xl mb-4">{faq.q}</h3>
              <p className="font-sans text-base text-muse-muted leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
