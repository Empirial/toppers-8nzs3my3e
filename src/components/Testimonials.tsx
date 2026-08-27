import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by our customers
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-3">
          <div className="flex flex-col rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm md:mt-0">
            <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
            <p className="mt-4 text-sm leading-relaxed text-card-foreground">
              {"The sourdough loaves are the best I've had since moving to Springfield. I order two every week for our family breakfast, and the delivery is always on time and still warm."}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src="https://placehold.co/96x96/e2e8f0/475569?text=%20"
                alt="Sarah M."
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-card-foreground">
                  {"Sarah M."}
                </p>
                <p className="text-xs text-muted-foreground">
                  {"Home baker and regular customer"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-lg border border-border bg-card p-6 pb-10 pt-10 text-card-foreground shadow-sm md:mt-10">
            <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
            <p className="mt-4 text-sm leading-relaxed text-card-foreground">
              {"I ordered a dozen assorted pastries for our office meeting, and everyone kept asking where they came from. The team loved the cinnamon rolls, and the whole process was so easy from ordering to pickup."}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src="https://placehold.co/96x96/e2e8f0/475569?text=%20"
                alt="James T."
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-card-foreground">
                  {"James T."}
                </p>
                <p className="text-xs text-muted-foreground">
                  {"Office manager at a local law firm"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm md:mt-4">
            <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
            <p className="mt-4 text-sm leading-relaxed text-card-foreground">
              {"As someone with a nut allergy, I really appreciate how clearly they label everything. Their chocolate chip cookies are my guilty pleasure, and I always know exactly what's safe for me to eat."}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src="https://placehold.co/96x96/e2e8f0/475569?text=%20"
                alt="Emily R."
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-card-foreground">
                  {"Emily R."}
                </p>
                <p className="text-xs text-muted-foreground">
                  {"Regular at the Saturday market stall"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}