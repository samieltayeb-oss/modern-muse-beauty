"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-muse-ink text-muse-ivory py-24 md:py-32 px-6 lg:px-24 flex flex-col items-center text-center">
      <h2 className="font-serif text-4xl md:text-6xl lg:text-[7rem] mb-16 tracking-tight leading-[1.0]">
        Begin your <br/> transformation.
      </h2>
      
      <a 
        href="https://modern-muse-beauty.square.site/"
        target="_blank"
        rel="noreferrer"
        className="inline-block border border-muse-ivory/30 hover:border-muse-ivory px-16 py-6 mb-32 transition-colors duration-500"
      >
        <span className="font-sans text-xs tracking-[0.3em] uppercase">
          Book an Appointment
        </span>
      </a>

      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-end border-t border-muse-ivory/10 pt-12 text-[10px] md:text-xs font-sans tracking-[0.2em] text-muse-ivory/50 uppercase">
        <div className="mb-8 lg:mb-0 text-center lg:text-left leading-loose">
          <p>909 5 Ave SW</p>
          <p>Calgary, AB T2P 3G5</p>
        </div>
        <div className="mb-8 lg:mb-0 flex flex-col md:flex-row gap-6 md:gap-12 text-center">
          <a href="https://www.instagram.com/modernmusebeauty_yyc" target="_blank" className="hover:text-muse-ivory transition-colors">Instagram</a>
          <a href="/contact" className="hover:text-muse-ivory transition-colors">Contact</a>
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} Modern Muse Beauty</p>
        </div>
      </div>
    </footer>
  );
}
