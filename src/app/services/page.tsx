import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const allServices = [
  {
    title: "Kobido Japanese Facial Massage",
    duration: "55 mins",
    price: "CAD$130.00",
    slug: "kobido-japanese-facial",
    desc: "A rejuvenating and deeply relaxing treatment that combines traditional techniques with precise, rhythmic movements to lift, tone, and revitalize the skin.",
    image: "/images/kobido_hands.jpg"
  },
  {
    title: "Full Body Lymphatic Drainage",
    duration: "1 hr",
    price: "CAD$150.00",
    slug: "full-body-lymphatic-drainage",
    desc: "A gentle, rhythmic treatment designed to stimulate the lymphatic system, helping the body eliminate toxins and reduce fluid retention.",
    image: "/images/lymphatic_body.jpg"
  },
  {
    title: "Glute Enhancement",
    duration: "1 hr 15 mins",
    price: "CAD$145.00",
    slug: "glute-enhancement",
    desc: "A non-invasive procedure that helps lift, firm, and tone the buttocks using specialized techniques and equipment.",
    image: "/images/glute_enhancement.jpg"
  },
  {
    title: "Cellulite Reduction Therapy",
    duration: "45 mins",
    price: "CAD$115.00",
    slug: "cellulite-reduction-therapy",
    desc: "Targets uneven skin texture and dimpling by improving circulation and stimulating collagen production.",
    image: "/images/cellulite_reduction.jpg"
  },
  {
    title: "Abdomen Drainage",
    duration: "40 mins",
    price: "CAD$105.00",
    slug: "abdomen-drainage",
    desc: "A gentle, targeted massage technique focused exclusively on the abdominal area to reduce bloating and support detox.",
    image: "/images/abdomen_drainage.jpg"
  }
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen selection:bg-muse-nude selection:text-muse-ink pt-32">
      <Navbar />
      
      <section className="container mx-auto px-6 md:px-12 py-24">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight mb-8">
          The Menu.
        </h1>
        <p className="font-sans text-lg text-muse-muted max-w-xl mb-24 leading-relaxed">
          Our treatments blend traditional techniques with modern body sculpting methods to enhance circulation, promote natural healing, and reveal a more sculpted, radiant you.
        </p>

        <div className="flex flex-col gap-24">
          {allServices.map((svc, idx) => (
            <Link href={`/services/${svc.slug}`} key={idx} className="group block">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                <div className="w-full md:w-5/12 aspect-[4/5] relative overflow-hidden">
                  <Image 
                    src={svc.image} 
                    alt={svc.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                </div>
                <div className="w-full md:w-7/12 flex flex-col justify-center">
                  <h2 className="font-serif text-4xl md:text-6xl mb-6 group-hover:text-muse-accent transition-colors">
                    {svc.title}
                  </h2>
                  <p className="font-sans text-base text-muse-muted max-w-md mb-8 leading-relaxed">
                    {svc.desc}
                  </p>
                  <div className="flex gap-8 font-sans text-sm tracking-widest uppercase text-muse-ink">
                    <span>{svc.duration}</span>
                    <span>{svc.price}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
