import { Sparkles, ShieldCheck, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      Icon: Sparkles,
      title: "Classic Butter Biscuits",
      description: "Flaky, golden, and melt-in-your-mouth tender. These are the biscuits that started it all, baked fresh every morning with real butter and buttermilk.",
    },
    {
      Icon: ShieldCheck,
      title: "Chocolate Chip Biscuits",
      description: "A sweet twist on a Southern staple, loaded with semi-sweet chocolate chips and a hint of vanilla. Perfect for breakfast, dessert, or any moment in between.",
    },
    {
      Icon: Zap,
      title: "Savory & Custom Orders",
      description: "From cheddar-jalapeño to rosemary-sea salt, we'll craft a batch just for you. Planning a wedding, brunch, or office event? Call us to discuss bulk orders and custom flavors.",
    },
  ];

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Our Biscuit Lineup, Baked Just for You
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {services.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-start rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary sm:h-14 sm:w-14">
                <Icon className="h-6 w-6 text-primary-foreground sm:h-7 sm:w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-card-foreground">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}