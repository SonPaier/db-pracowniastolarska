import Image from "next/image";

const logos = [
  { name: "Häfele", src: "/loga/marki/hafele.webp", width: 701, height: 120 },
  { name: "Blum", src: "/loga/marki/blum.webp", width: 443, height: 120 },
  { name: "Egger", src: "/loga/marki/egger.webp", width: 320, height: 120 },
  { name: "Eclisse", src: "/loga/marki/eclisse.webp", width: 390, height: 120 },
  { name: "Franke", src: "/loga/marki/franke.webp", width: 382, height: 120 },
  { name: "Peka", src: "/loga/marki/peka.webp", width: 331, height: 120 },
  { name: "Corian", src: "/loga/marki/corian.webp", width: 172, height: 120 },
];

// Duplicate set so the keyframe -50% loops seamlessly
const track = [...logos, ...logos];

export default function TrustedBy() {
  return (
    <section className="py-10 lg:py-14 bg-white">
      <div className="container-editorial">
        <p className="text-center text-[12px] font-bold uppercase tracking-[0.25em] text-text-light font-sans mb-10">
          Pracujemy na produktach renomowanych marek
        </p>
      </div>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max items-center gap-x-[30px] animate-marquee">
          {track.map((brand, i) => (
            <Image
              key={`${brand.name}-${i}`}
              src={brand.src}
              alt={brand.name}
              width={brand.width}
              height={brand.height}
              title={brand.name}
              aria-hidden={i >= logos.length}
              className="h-[60px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
