"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import gsap from "gsap";

const allServices = [
  {
    title: "Kobido Japanese Facial Massage",
    duration: "55 mins",
    price: "CAD$130.00",
    slug: "kobido-japanese-facial",
    desc: "A rejuvenating and deeply relaxing treatment that combines traditional techniques with precise, rhythmic movements to lift, tone, and revitalize the skin.",
    image: "/images/kobido_hands.jpg",
    benefits: [
      "Naturally lifts and sculpts the jawline and cheekbones",
      "Stimulates deep collagen and elastin production",
      "Significantly reduces facial puffiness through lymphatic drainage",
      "Releases deep tension held in the facial muscles and neck"
    ],
    gallery: [
      "/images/kobido_hands.jpg",
      "/images/detail_oils.jpg",
      "/images/gallery_two.jpg",
      "/images/detail_ambient.jpg"
    ]
  },
  {
    title: "Full Body Lymphatic Drainage",
    duration: "1 hr",
    price: "CAD$150.00",
    slug: "full-body-lymphatic-drainage",
    desc: "A gentle, rhythmic treatment designed to stimulate the lymphatic system, helping the body eliminate toxins and reduce fluid retention.",
    image: "/images/lymphatic_body.jpg",
    benefits: [
      "Accelerates the body's natural detoxification processes",
      "Reduces bloating, water retention, and systemic inflammation",
      "Boosts immune function and overall vitality",
      "Promotes profound relaxation and nervous system regulation"
    ],
    gallery: [
      "/images/lymphatic_body.jpg",
      "/images/detail_ambient.jpg",
      "/images/detail_oils.jpg",
      "/images/hero_services.jpg"
    ]
  },
  {
    title: "Glute Enhancement",
    duration: "1 hr 15 mins",
    price: "CAD$145.00",
    slug: "glute-enhancement",
    desc: "A non-invasive procedure that helps lift, firm, and tone the buttocks using specialized techniques and equipment.",
    image: "/images/glute_enhancement.jpg",
    benefits: [
      "Lifts and contours the gluteal muscles",
      "Improves local blood circulation and tissue oxygenation",
      "Firms and tightens the overlying skin",
      "Provides a non-surgical approach to body sculpting"
    ],
    gallery: [
      "/images/glute_enhancement.jpg",
      "/images/detail_oils.jpg",
      "/images/detail_ambient.jpg",
      "/images/gallery_one.jpg"
    ]
  },
  {
    title: "Cellulite Reduction Therapy",
    duration: "45 mins",
    price: "CAD$115.00",
    slug: "cellulite-reduction-therapy",
    desc: "Targets uneven skin texture and dimpling by improving circulation and stimulating collagen production.",
    image: "/images/cellulite_reduction.jpg",
    benefits: [
      "Smooths skin texture and reduces the appearance of dimpling",
      "Breaks down stubborn fascial adhesions",
      "Increases localized circulation to support fat metabolism",
      "Improves overall skin tone and elasticity"
    ],
    gallery: [
      "/images/cellulite_reduction.jpg",
      "/images/detail_ambient.jpg",
      "/images/gallery_one.jpg",
      "/images/detail_oils.jpg"
    ]
  },
  {
    title: "Abdomen Drainage",
    duration: "40 mins",
    price: "CAD$105.00",
    slug: "abdomen-drainage",
    desc: "A gentle, targeted massage technique focused exclusively on the abdominal area to reduce bloating and support detox.",
    image: "/images/abdomen_drainage.jpg",
    benefits: [
      "Relieves abdominal bloating and gas",
      "Stimulates digestive organ function and motility",
      "Releases deep tension held in the diaphragm and gut",
      "Supports liver and localized lymphatic detoxification"
    ],
    gallery: [
      "/images/abdomen_drainage.jpg",
      "/images/detail_oils.jpg",
      "/images/detail_ambient.jpg",
      "/images/gallery_two.jpg"
    ]
  },
  {
    title: "Add on wood therapy",
    duration: "20 mins",
    price: "CAD$25.00",
    slug: "add-on-wood-therapy",
    desc: "Perfect to add on to your Glute enhancement treatment. This treatment uses specially crafted wooden tools to help target cellulite and stimulate blood flow at the back of the legs.",
    image: "/images/ig_aesthetic_2.jpg",
    benefits: [
      "Targets stubborn cellulite",
      "Stimulates intense localized blood flow",
      "Breaks down fascial restrictions",
      "Perfect complement to glute enhancement"
    ],
    gallery: [
      "/images/ig_aesthetic_2.jpg",
      "/images/ig_aesthetic_4.jpg",
      "/images/cellulite_reduction.jpg",
      "/images/detail_oils.jpg"
    ]
  },
  {
    title: "Add on mask",
    duration: "10 mins",
    price: "CAD$15.00",
    slug: "add-on-mask",
    desc: "The Hydro Jelly Mask add on is the perfect finishing touch to a Kobido Japanese facial massage. Rich in hydrating and soothing ingredients, this mask deeply nourishes the skin.",
    image: "/images/spotlight_kobido.jpg",
    benefits: [
      "Deeply hydrates and soothes the skin",
      "Locks in serums and active ingredients",
      "Reduces redness and inflammation",
      "Provides a cooling, sensory finish to your facial"
    ],
    gallery: [
      "/images/spotlight_kobido.jpg",
      "/images/detail_ambient.jpg",
      "/images/kobido_hands.jpg",
      "/images/ig_aesthetic_5.jpg"
    ]
  }
];

export default function ServiceSlugPage({ params }: { params: { slug: string } }) {
  const service = allServices.find(s => s.slug === params.slug);

  useEffect(() => {
    gsap.fromTo(".fade-up", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power3.out" }
    );
  }, [params.slug]);

  if (!service) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-muse-ivory text-muse-ink">
      <Navbar />

      <section className="container mx-auto px-6 lg:px-24 pt-48 pb-16">
        <Link href="/services" className="font-sans text-xs tracking-[0.2em] uppercase text-muse-muted hover:text-muse-ink transition-colors pb-2 border-b border-transparent hover:border-muse-ink fade-up inline-block mb-12">
          &larr; Back to Offerings
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 fade-up">
          <div className="w-full lg:w-1/2">
            <h1 className="font-serif text-5xl md:text-7xl tracking-tight leading-tight mb-8">{service.title}</h1>
            <h3 className="font-sans text-xs tracking-[0.4em] uppercase text-muse-muted mb-12">
              {service.duration} &mdash; {service.price}
            </h3>
            <p className="font-sans text-base leading-[2.2] text-muse-ink/80 mb-12">
              {service.desc}
            </p>
            
            <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-muse-ink mb-6">Key Benefits</h4>
            <ul className="space-y-4 mb-16">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="font-sans text-sm text-muse-muted leading-relaxed flex gap-4">
                  <span className="text-muse-ink/30">&mdash;</span> {benefit}
                </li>
              ))}
            </ul>

            <a 
              href="https://modern-muse-beauty.square.site/" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-block border border-muse-ink px-12 py-5 font-sans text-xs tracking-[0.3em] uppercase hover:bg-muse-ink hover:text-muse-ivory transition-colors duration-500"
            >
              Book Treatment
            </a>
          </div>

          <div className="w-full lg:w-1/2 aspect-[3/4] relative bg-muse-stone overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Detail Gallery Section */}
      <section className="container mx-auto px-6 lg:px-24 py-16 md:py-32">
        <h3 className="font-sans text-xs tracking-[0.4em] uppercase text-muse-muted mb-16 text-center fade-up">Treatment Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.gallery.map((imgSrc, idx) => (
            <div key={idx} className="relative aspect-[4/3] w-full bg-muse-stone overflow-hidden fade-up">
              <Image 
                src={imgSrc} 
                alt={`${service.title} detail ${idx + 1}`} 
                fill 
                className="object-cover" 
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
