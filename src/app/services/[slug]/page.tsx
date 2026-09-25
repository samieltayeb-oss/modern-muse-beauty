import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { notFound } from "next/navigation";

// Reuse the exact data structure for static generation
const allServices = [
  {
    title: "Kobido Japanese Facial Massage",
    duration: "55 mins",
    price: "CAD$130.00",
    slug: "kobido-japanese-facial",
    desc: "The Kobido Japanese Facial Massage is a rejuvenating and deeply relaxing treatment that combines traditional techniques with precise, rhythmic movements to lift, tone, and revitalize the skin. Known as the “ancient way of beauty,” this massage stimulates circulation, boosts collagen production, and promotes lymphatic drainage, leaving the face glowing, sculpted, and refreshed. It’s a natural, non-invasive way to restore radiance and harmony to both skin and mind.",
    image: "/images/kobido_hands.jpg"
  },
  {
    title: "Full Body Lymphatic Drainage",
    duration: "1 hr",
    price: "CAD$150.00",
    slug: "full-body-lymphatic-drainage",
    desc: "A full body lymphatic drainage massage is a gentle, rhythmic treatment designed to stimulate the lymphatic system, helping the body eliminate toxins and reduce fluid retention. Using light, sweeping motions, it promotes circulation, supports the immune system, and leaves you feeling lighter and deeply relaxed. This includes legs, arms, abdomen, decollete, face and neck.",
    image: "/images/lymphatic_body.jpg"
  },
  {
    title: "Glute Enhancement",
    duration: "1 hr 15 mins",
    price: "CAD$145.00",
    slug: "glute-enhancement",
    desc: "The glute enhancement treatment is a non invasive procedure that helps lift, firm, and tone the buttocks. Using specialized techniques and equipment, it stimulates muscle activity and improves circulation, enhancing shape and contour for a more sculpted, lifted appearance.",
    image: "/images/hero_portrait.jpg"
  },
  {
    title: "Cellulite Reduction Therapy",
    duration: "45 mins",
    price: "CAD$115.00",
    slug: "cellulite-reduction-therapy",
    desc: "Cellulite reduction therapy on the back of the thighs targets uneven skin texture and dimpling by improving circulation and stimulating collagen production. This therapy helps smooth and firm the skin, reducing the appearance of cellulite for a more toned and refined look.",
    image: "/images/lymphatic_body.jpg"
  },
  {
    title: "Abdomen Drainage",
    duration: "40 mins",
    price: "CAD$105.00",
    slug: "abdomen-drainage",
    desc: "Abdomen Lymphatic Drainage is a gentle, targeted massage technique focused exclusively on the abdominal area. Its purpose is to stimulte the lymphatic system, helping reduce bloating, ease digestive discomfort and support the bodys natural detoxification process.",
    image: "/images/studio_atmosphere.jpg"
  }
];

export async function generateStaticParams() {
  return allServices.map((svc) => ({
    slug: svc.slug,
  }));
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = allServices.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="relative min-h-screen selection:bg-muse-nude selection:text-muse-ink">
      <Navbar />
      
      <section className="w-full pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 flex flex-col md:flex-row gap-12 lg:gap-24 container mx-auto">
        <div className="w-full md:w-1/2 relative aspect-[3/4]">
          <Image 
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h3 className="font-sans text-xs tracking-widest uppercase text-muse-accent mb-6">Signature Treatment</h3>
          <h1 className="font-serif text-5xl md:text-7xl mb-12 leading-tight">
            {service.title}
          </h1>
          
          <div className="flex gap-8 font-sans text-sm tracking-widest uppercase text-muse-ink mb-12 py-6 border-y border-muse-stone/30">
            <span>{service.duration}</span>
            <span>{service.price}</span>
          </div>

          <p className="font-sans text-lg leading-relaxed text-muse-muted mb-12 max-w-lg">
            {service.desc}
          </p>

          <a 
            href="https://modern-muse-beauty.square.site/" 
            target="_blank" 
            rel="noreferrer"
            className="self-start pb-2 border-b border-muse-ink font-sans text-xs tracking-widest uppercase hover:text-muse-accent hover:border-muse-accent transition-colors"
          >
            Book this treatment
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
