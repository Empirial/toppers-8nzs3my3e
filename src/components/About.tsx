export default function About() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            A Little Bit of Toppers in Every Batch
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Toppers started in a home kitchen with a simple belief: biscuits should taste like someone actually made them, not like they came off a factory line. We use real butter, farm-fresh eggs, and stone-ground flour, and we mix everything by hand in small batches. That's why each biscuit has that slightly uneven, golden-brown edge, the kind you'd get from your grandmother's oven.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            We're still a small team, and we like it that way. It means we can take the time to source local honey, fold in chunks of dark chocolate instead of chips, and bake every morning so the biscuits are still warm when they reach your door. Whether you're treating yourself or stocking up for a gathering, we hope you taste the difference a little patience makes.
          </p>
        </div>
        <div className="order-first md:order-last">
          <img
            src="https://placehold.co/960x640/e2e8f0/475569?text=about"
            alt="A close-up of freshly baked Toppers biscuits on a cooling rack, with a dusting of flour and a jar of honey nearby."
            className="aspect-[4/3] w-full rounded-lg border border-border object-cover"
          />
        </div>
      </div>
    </section>
  );
}