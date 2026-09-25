import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen selection:bg-muse-nude selection:text-muse-ink pt-32 flex flex-col justify-between">
      <Navbar />
      
      <section className="container mx-auto px-6 md:px-12 py-24 flex-1 flex flex-col justify-center items-center text-center">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight mb-12">
          Connect.
        </h1>
        
        <div className="font-sans text-lg text-muse-muted space-y-4 mb-16">
          <p>909 5 Ave SW</p>
          <p>Calgary, Alberta T2P 3G5</p>
          <p>(403) 561-1337</p>
        </div>

        <div className="flex gap-8 font-sans text-xs tracking-widest uppercase text-muse-ink">
          <a href="https://modern-muse-beauty.square.site/" target="_blank" rel="noreferrer" className="pb-2 border-b border-muse-ink hover:text-muse-accent hover:border-muse-accent transition-colors">
            Book an Appointment
          </a>
          <a href="https://www.instagram.com/modernmusebeauty_yyc" target="_blank" rel="noreferrer" className="pb-2 border-b border-muse-ink hover:text-muse-accent hover:border-muse-accent transition-colors">
            Instagram
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
