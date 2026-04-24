const stats = [
  { value: "15+", label: "lat doświadczenia" },
  { value: "500+", label: "zrealizowanych projektów" },
  { value: "100%", label: "indywidualnych projektów" },
];

export default function TrustBar() {
  return (
    <section className="bg-primary py-10 lg:py-12">
      <div className="container-editorial">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 lg:gap-24">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl lg:text-4xl font-semibold text-secondary-light">
                {stat.value}
              </p>
              <p className="text-xs text-text-on-dark/70 font-sans mt-2 uppercase tracking-[0.15em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
