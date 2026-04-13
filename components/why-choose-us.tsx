import { reasons } from "@/lib/data/reasons";
import { getAnimationDelay } from "@/lib/utils/animation";

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative py-16 sm:py-24 overflow-hidden"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2
            id="why-choose-us-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight"
          >
            Mengapa Memilih Kami?
          </h2>
          <div
            className="w-20 h-1 bg-primary mx-auto mb-6"
            aria-hidden="true"
          />
          <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kami menghadirkan kualitas terbaik melalui metodologi yang telah
            teruji, teknologi terdepan, dan komitmen penuh pada kesuksesan Anda.
          </p>
        </div>

        {/* Reasons with Zig-Zag Layout */}
        <div className="space-y-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isEven = index % 2 === 0;
            const displayNumber = (index + 1).toString().padStart(2, "0");

            return (
              <div
                key={index}
                className={`
                  relative flex items-center gap-8 lg:gap-12
                  ${isEven ? "flex-row" : "flex-row-reverse"}
                  animate-in fade-in slide-in-from-bottom duration-1000
                `}
                style={{ animationDelay: getAnimationDelay(index) }}
              >
                {/* Icon Card */}
                <div
                  className={`
                  shrink-0 w-32 h-32 rounded-3xl
                  dark:bg-[#1a3a5c]/60 dark:border-white/10
                  bg-white border-gray-300
                  flex items-center justify-center
                  shadow-xl hover:shadow-2xl
                  hover:scale-110 hover:rotate-6
                  transition-all duration-500
                  group cursor-pointer
                  ${isEven ? "" : "ml-auto lg:ml-0"}
                `}
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Icon className="relative w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`
                  flex-1 p-8 rounded-3xl
                  dark:bg-[#1a3a5c]/60 dark:border-white/10
                  bg-white border-gray-300
                  shadow-lg hover:shadow-xl
                  hover:-translate-y-1
                  transition-all duration-300
                  ${isEven ? "text-left" : "text-right"}
                `}
                >
                  {/* Connecting line indicator */}
                  <div
                    className={`
                      absolute top-1/2 -translate-y-1/2 w-16 h-0.5
                      bg-linear-to-r from-primary to-secondary
                      ${isEven ? "-right-16 left-auto" : "-left-16 right-auto"}
                      opacity-0 hover:opacity-100 transition-opacity duration-500
                    `}
                    aria-hidden="true"
                  />

                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed text-lg">
                    {reason.description}
                  </p>

                  {/* Progress bar animation */}
                  <div
                    className={`mt-6 h-1 rounded-full bg-primary/10 overflow-hidden ${isEven ? "" : "ml-auto"}`}
                    style={{ width: "100%" }}
                  >
                    <div
                      className="h-full bg-linear-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: "0%",
                        animation: `progress-fill 1.5s ease-out ${index * 0.2}s forwards`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress-fill {
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
