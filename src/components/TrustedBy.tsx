import Image from "next/image";

const logos = [
  { name: "Blum", src: "/loga/blum.jpg" },
  { name: "Egger", src: "/loga/egger.png" },
  { name: "Häfele", src: "/loga/hafele.svg" },
  { name: "Italiana Ferramenta", src: "/loga/italiana-ferramenta.svg" },
  { name: "Corian", src: "/loga/corian.svg" },
  { name: "Peka", src: "/loga/peka.svg" },
  { name: "Bortoluzzi", src: "/loga/bortoluzzi.svg" },
  { name: "Eclisse", src: "/loga/eclisse.svg" },
  { name: "Franke", src: "/loga/franke.svg" },
];

export default function TrustedBy() {
  return (
    <section className="py-10 lg:py-14 bg-white">
      <div className="container-editorial">
        <p className="text-center text-[0.65rem] uppercase tracking-[0.25em] text-text-light font-sans mb-8">
          Pracujemy na produktach renomowanych marek
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-14">
          {logos.map((brand) => (
            <div key={brand.name} title={brand.name}>
              <Image
                src={brand.src}
                alt={brand.name}
                width={120}
                height={40}
                className="h-8 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
