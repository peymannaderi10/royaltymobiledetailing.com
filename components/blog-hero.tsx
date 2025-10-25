export function BlogHero() {
  return (
    <section className="relative pt-36 pb-24 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-car-interior-with-sunroof-open-showing-craf.png"
          alt="Luxury car interior"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/45 to-white z-10"></div>
      </div>
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-[family-name:var(--font-heading)]">
          Detailing Tips & Insights
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Expert mobile detailing tips, car care advice, and professional insights to keep your vehicle looking showroom-ready
        </p>
      </div>
    </section>
  )
}
