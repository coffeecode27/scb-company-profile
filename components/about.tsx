export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
            <div>
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 tracking-tight"
              >
                Membangun Masa Depan Keunggulan Digital
              </h2>
              <div className="w-20 h-1 bg-primary mb-6" aria-hidden="true" />
            </div>

            <div className="space-y-6">
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                Didirikan pada 2014,{" "}
                <strong className="text-foreground">
                  PT Solusi Cerdas Berkualitas
                </strong>{" "}
                berada di garis depan inovasi digital, membantu bisnis mengubah
                ide menjadi solusi yang kuat dan skalabel.
              </p>
              <p className="text-base font-body text-muted-foreground leading-relaxed">
                Kami berfokus pada pengembangan perangkat lunak end-to-end, dari
                konsep hingga deployment. Tim engineer, desainer, dan strategist
                kami berkolaborasi untuk menghadirkan solusi yang tidak hanya
                memenuhi, tetapi juga melampaui ekspektasi.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  10+
                </div>
                <p className="text-sm font-body text-muted-foreground">
                  Tahun Pengalaman
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  150+
                </div>
                <p className="text-sm font-body text-muted-foreground">
                  Proyek Selesai
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  50+
                </div>
                <p className="text-sm font-body text-muted-foreground">
                  Klien Puas
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Vision/Mission Cards */}
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            {/* Vision Card */}
            <div className="p-8 rounded-3xl dark:bg-[#1a3a5c]/60 dark:border-white/10 bg-white border-gray-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl dark:bg-primary/20 bg-primary/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    Visi Kami
                  </h3>
                  <p className="text-base font-body text-muted-foreground leading-relaxed">
                    Menjadi mitra tepercaya bagi bisnis yang ingin
                    bertransformasi digital melalui solusi inovatif yang
                    mendorong pertumbuhan dan kesuksesan.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-8 rounded-3xl dark:bg-[#1a3a5c]/60 dark:border-white/10 bg-white border-gray-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl dark:bg-primary/20 bg-primary/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    Misi Kami
                  </h3>
                  <p className="text-base font-body text-muted-foreground leading-relaxed">
                    Memberdayakan bisnis melalui teknologi terdepan dan kualitas
                    pengerjaan terbaik, memastikan setiap solusi yang kami
                    bangun memberi nilai jangka panjang.
                  </p>
                </div>
              </div>
            </div>

            {/* Values Card */}
            <div className="p-8 rounded-3xl dark:bg-[#1a3a5c]/60 dark:border-white/10 bg-white border-gray-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl dark:bg-primary/20 bg-primary/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    Nilai Kami
                  </h3>
                  <p className="text-base font-body text-muted-foreground leading-relaxed">
                    Keunggulan, Inovasi, Integritas, dan Kolaborasi adalah
                    prinsip inti yang memandu setiap proyek yang kami kerjakan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
