import Image from "next/image";
import BikeCarousel from "@/components/BikeCarousel";
import ParallaxCommute from "@/components/ParallaxCommute";

type CommuteMarkProps = {
  className?: string;
  variant?: "fill" | "outline";
};

function CommuteMark({ className, variant = "fill" }: CommuteMarkProps) {
  const isOutline = variant === "outline";

  return (
    <svg
      width="1318"
      height="197"
      viewBox="0 0 1318 197"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M87.4047 196.199C70.3287 196.199 55.1891 191.974 41.9859 183.523C28.7828 175.073 18.4844 163.455 11.0906 148.667C3.69688 133.704 2.98094e-06 116.804 2.98094e-06 97.9672C2.98094e-06 79.1308 3.69688 62.3188 11.0906 47.5313C18.4844 32.5678 28.7828 20.949 41.9859 12.675C55.1891 4.22504 70.3287 4.62642e-05 87.4047 4.62642e-05C102.368 4.62642e-05 115.659 2.99275 127.278 8.97817C138.897 14.7875 148.139 22.7094 155.005 32.7438C161.87 42.7782 166.095 53.8688 167.68 66.0157H142.858C140.569 54.2209 135.112 43.8344 126.486 34.8563C118.036 25.7021 105.009 21.125 87.4047 21.125C73.1453 21.125 61.3505 24.7339 52.0203 31.9516C42.6901 39.1693 35.8245 48.5875 31.4234 60.2063C27.0224 71.825 24.8219 84.412 24.8219 97.9672C24.8219 111.522 27.0224 124.197 31.4234 135.992C35.8245 147.611 42.6901 157.029 52.0203 164.247C61.3505 171.465 73.1453 175.074 87.4047 175.074C105.537 175.074 119.092 170.144 128.07 160.286C137.048 150.252 141.978 138.281 142.858 124.373H167.68C166.271 138.281 162.134 150.692 155.269 161.606C148.403 172.521 139.161 181.059 127.542 187.22C115.923 193.206 102.544 196.199 87.4047 196.199ZM265.416 196.199C329.055 196.199 377.642 140.745 377.642 76.5782C377.642 31.1594 349.124 4.62642e-05 301.064 4.62642e-05C237.425 4.62642e-05 188.838 55.4532 188.838 119.62C188.838 165.039 217.356 196.199 265.416 196.199ZM212.867 119.62C212.867 67.6001 247.724 21.125 299.216 21.125C338.033 21.125 353.613 45.4188 353.613 76.5782C353.613 128.598 318.756 175.074 267.264 175.074C228.447 175.074 212.867 150.78 212.867 119.62ZM400.185 3.69692H432.664L491.814 160.55H492.342L551.492 3.69692H583.972V192.502H560.207V37.2329H559.678L502.641 192.502H481.516L424.478 37.2329H423.95V192.502H400.185V3.69692ZM622.987 3.69692H655.467L714.617 160.55H715.145L774.295 3.69692H806.775V192.502H783.009V37.2329H782.481L725.444 192.502H704.319L647.281 37.2329H646.753V192.502H622.987V3.69692ZM916.823 196.199C892.529 196.199 874.397 190.213 862.426 178.242C850.455 166.095 844.47 149.9 844.47 129.655V3.69692H868.235V129.655C868.235 144.97 872.196 156.413 880.118 163.983C888.216 171.377 900.451 175.074 916.823 175.074C933.195 175.074 945.342 171.377 953.264 163.983C961.362 156.413 965.41 144.97 965.41 129.655V3.69692H989.176V129.655C989.176 149.9 983.191 166.095 971.22 178.242C959.249 190.213 941.117 196.199 916.823 196.199ZM1074.08 24.8219H1011.24V3.69692H1160.7V24.8219H1097.85V192.502H1074.08V24.8219ZM1184.12 3.69692H1314.83V24.8219H1207.89V84.236H1302.16V105.361H1207.89V171.377H1318V192.502H1184.12V3.69692Z"
        fill={isOutline ? "transparent" : "#fe610b"}
        stroke={isOutline ? "#fe610b" : "none"}
        strokeWidth={isOutline ? 2 : undefined}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CommuteO({ className }: { className?: string }) {
  return (
    <svg
      viewBox="188.838 0 188.804 196.199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M265.416 196.199C329.055 196.199 377.642 140.745 377.642 76.5782C377.642 31.1594 349.124 4.62642e-05 301.064 4.62642e-05C237.425 4.62642e-05 188.838 55.4532 188.838 119.62C188.838 165.039 217.356 196.199 265.416 196.199ZM212.867 119.62C212.867 67.6001 247.724 21.125 299.216 21.125C338.033 21.125 353.613 45.4188 353.613 76.5782C353.613 128.598 318.756 175.074 267.264 175.074C228.447 175.074 212.867 150.78 212.867 119.62Z"
        fill="currentColor"
      />
    </svg>
  );
}

function JoinWordmark() {
  return (
    <div
      className="flex items-start text-white font-normal leading-none tracking-normal whitespace-nowrap"
      style={{ fontSize: "clamp(104px, 17.4vw, 328px)" }}
      aria-hidden="true"
    >
      <span>J</span>
      <CommuteO className="mx-[0.025em] mt-[0.075em] h-[0.72em] w-auto shrink-0" />
      <span>IN</span>
    </div>
  );
}

function FooterCommuteWordmark() {
  return (
    <div
      className="flex items-center text-white font-normal leading-none tracking-normal whitespace-nowrap overflow-hidden"
      style={{ fontSize: "clamp(72px, 13.2vw, 210px)" }}
      aria-hidden="true"
    >
      <span>C</span>
      <CommuteO className="mx-[0.01em] h-[0.82em] w-auto shrink-0 translate-y-[0.03em]" />
      <span>MMUTE</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden font-[family-name:var(--font-display)]">

      {/* ── HERO ── */}
      <section className="bg-white" style={{ isolation: "isolate" }}>

        {/* Navbar — inline, black text on white */}
        <nav className="flex items-center justify-between px-10 py-6">
          <div className="flex items-center gap-2">
            <Image src="/assets/logo.svg" width={26} height={26} alt="ReCycle" />
            <span
              className="text-lg font-bold text-black tracking-wide"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              RECYCLE®
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-10">
            <a href="#" className="text-sm text-black/70 hover:text-black transition-colors flex items-center gap-1">
              E-bikes <span className="text-xs opacity-60">▾</span>
            </a>
            {["Specs", "Our impact"].map((link) => (
              <a key={link} href="#" className="text-sm text-black/70 hover:text-black transition-colors">
                {link}
              </a>
            ))}
          </div>
          <button
            className="px-5 py-2 rounded-full bg-[#1b1b1b] text-white text-sm hover:opacity-80 transition-opacity"
            style={{ fontFamily: "var(--font-roboto)" }}
          >
            Order now
          </button>
        </nav>

        {/* Heading + buttons — above the image */}
        <div className="px-10 pt-2 pb-10 max-w-[520px]">
          <h1 className="text-[28px] lg:text-[40px] font-normal text-black leading-[1.2] mb-6">
            Revolutionize Your Commute with ReCycle E-Bikes
          </h1>
          <div className="flex gap-4 flex-wrap">
            <button
              className="px-5 py-2 rounded-full bg-[#1b1b1b] text-white text-sm hover:opacity-80 transition-opacity"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              Order now
            </button>
            <button
              className="px-5 py-2 rounded-full border border-[#1b1b1b] text-[#1b1b1b] text-sm hover:bg-[#1b1b1b] hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              Take a test Ride
            </button>
          </div>
        </div>

        {/* Handlebar image + COMMUTE overlay */}
        <div className="relative bg-white overflow-hidden">
          <ParallaxCommute className="absolute left-1/2 top-[35%] z-0 w-[92vw] select-none pointer-events-none">
            <CommuteMark className="block h-auto w-full" />
          </ParallaxCommute>
          <Image
            src="/assets/e-bike-image-8.png"
            width={1440}
            height={816}
            className="relative z-10 w-full h-auto block"
            alt="ReCycle e-bike handlebar"
            priority
          />
          <ParallaxCommute className="absolute left-1/2 top-[35%] z-20 w-[92vw] select-none pointer-events-none">
            <CommuteMark className="block h-auto w-full" variant="outline" />
          </ParallaxCommute>
        </div>

        {/* Impact stats */}
        <div className="px-10 lg:px-20 py-20 lg:py-28">
          <div className="max-w-[1268px] mx-auto flex flex-col gap-14 lg:gap-16">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[201px]">
              <h2 className="text-[32px] lg:text-[48px] font-normal text-black leading-[1.2] lg:max-w-[380px] shrink-0">
                Positive Impact of ReCycle E-Bikes
              </h2>
              <p className="text-[16px] lg:text-[18px] text-black leading-[1.6] lg:max-w-[596px]">
                Not only are ReCycle e-bikes good for the environment, they are
                also beneficial for your health and well-being. Electric-assisted
                biking can provide a low-impact cardiovascular workout and help
                reduce stress while getting you where you need to go.
              </p>
            </div>
            <div className="flex gap-10 lg:gap-[72px]">
              <div className="flex flex-col">
                <span className="font-normal text-[#fe610b] leading-[1.2]" style={{ fontSize: "clamp(64px, 8.9vw, 128px)" }}>
                  25%
                </span>
                <p className="text-[16px] lg:text-[18px] text-black/50 max-w-[276px]">
                  Reduction in commuter transportation carbon emissions.
                </p>
              </div>
              <div className="flex flex-col">
                <span className="font-normal text-[#fe610b] leading-[1.2]" style={{ fontSize: "clamp(64px, 8.9vw, 128px)" }}>
                  30%
                </span>
                <p className="text-[16px] lg:text-[18px] text-black/50 max-w-[276px]">
                  Reduction in commuter transportation carbon emissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECYCLE® MARQUEE ── */}
      <section className="overflow-hidden py-2 bg-white border-t border-black/5">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="shrink-0 font-normal text-black leading-none mr-4" style={{ fontSize: "clamp(60px, 17vw, 246px)" }}>
              ReCycle® &nbsp;—&nbsp;
            </span>
          ))}
        </div>
      </section>

      {/* ── FULL-WIDTH BIKE IMAGE ── */}
      <section className="relative h-[50vw] max-h-[810px] min-h-[320px]">
        <Image src="/assets/e-bike-image-10.png" fill className="object-cover" alt="ReCycle e-bike in action" />
      </section>

      {/* ── SUSTAINABLE TRANSPORTATION SECTION ── */}
      <section className="bg-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-[1268px] mx-auto px-10 lg:px-20">
          <h2 className="text-[28px] lg:text-[48px] font-normal text-black leading-[1.2] mb-14 lg:mb-20 text-center">
            Leading the Way in <br className="hidden lg:block" />
            Sustainable Transportation
          </h2>
        </div>

        <BikeCarousel />

      </section>

      {/* ── FEATURE CARDS SECTION ── */}
      <section className="bg-black py-16 lg:py-24 px-10 lg:px-20">
        <div className="max-w-[1268px] mx-auto flex flex-col gap-6">
            <div className="relative h-[420px] lg:h-[720px] rounded-lg overflow-hidden">
              <Image src="/assets/bike-scene-10.png" fill className="object-cover" alt="High-quality e-bike materials" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-[24px] lg:text-[32px] font-normal text-white mb-3">High-quality materials</h3>
                <p className="text-[16px] lg:text-[18px] text-white/50 max-w-[414px]">
                  Premium materials and advanced construction techniques to ensure durability and a long lifespan.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
              <div className="flex-1 flex flex-col gap-5">
                <div className="relative h-[300px] lg:h-[520px] rounded-lg overflow-hidden bg-[#222222]">
                  <Image src="/assets/pic.png" fill className="object-cover" alt="E-bike component quality" />
                </div>
                <div>
                  <h3 className="text-[22px] lg:text-[32px] font-normal text-white mb-2">High-quality materials</h3>
                  <p className="text-[15px] lg:text-[18px] text-white/50 max-w-[414px]">
                    Premium materials and advanced construction techniques to ensure durability and a long lifespan.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-5">
                <div className="relative h-[300px] lg:h-[520px] rounded-lg overflow-hidden bg-white">
                  <Image src="/assets/bike-scene-16.png" fill className="object-cover" alt="Sustainable manufacturing" />
                </div>
                <div>
                  <h3 className="text-[22px] lg:text-[32px] font-normal text-white mb-2">Sustainable manufacturing practices</h3>
                  <p className="text-[15px] lg:text-[18px] text-white/50 max-w-[473px]">
                    We have adopted environmentally-friendly manufacturing practices and source all our materials sustainably.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="bg-white py-16 lg:py-24 px-10 lg:px-20">
        <div className="max-w-[1268px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="relative w-full lg:w-[580px] shrink-0" style={{ height: "clamp(280px, 40vw, 640px)" }}>
            <Image src="/assets/e-bike-image-1.png" fill className="object-contain" alt="ReCycle e-bike" />
          </div>
          <div className="flex flex-col gap-8 lg:gap-10">
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="20" height="19" viewBox="0 0 20 19" fill="#fe610b">
                  <path d="M10 0L12.245 6.91L19.51 6.91L13.633 11.18L15.878 18.09L10 13.82L4.122 18.09L6.367 11.18L0.49 6.91L7.755 6.91Z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-[22px] lg:text-[36px] font-normal text-black/50 leading-[1.3]">
              &ldquo;ReCycle e-bikes have exceeded my expectations. Not only have I saved money on gas, but my fitness and well-being have also improved. Plus, I&rsquo;m doing my part to reduce my carbon footprint. I highly recommend ReCycle to anyone looking for a smarter way to commute.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1b1b1b] flex items-center justify-center text-white text-sm font-medium">J</div>
              <div>
                <p className="text-[15px] font-medium text-black">Jordan M.</p>
                <p className="text-[14px] text-black/50">Daily commuter, San Francisco</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ORANGE CTA BANNER ── */}
      <section className="relative bg-[#fe610b] overflow-hidden min-h-[560px] lg:min-h-[760px] xl:min-h-[min(1080px,57.5vw)]">
        <Image
          src="/assets/e-bike-image-6.png"
          fill
          className="z-10 object-cover object-[52%_50%]"
          alt=""
          aria-hidden="true"
          sizes="100vw"
        />
        <div className="absolute left-10 top-24 z-20 lg:left-20 lg:top-36 xl:top-40">
          <JoinWordmark />
        </div>
        <div className="absolute left-10 bottom-14 z-20 lg:left-20 lg:bottom-16">
          <h2 className="text-[42px] lg:text-[64px] font-normal text-white leading-[1.18] max-w-[540px]">
            Join the ReCycle <br />
            Revolution
          </h2>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-black px-10 lg:px-20 pt-16 pb-10">
        <div className="max-w-[1680px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-28 mb-12 lg:mb-16">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-6">
              <Image src="/assets/logo.svg" width={24} height={24} alt="ReCycle" className="invert" />
              <span className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-roboto)" }}>ReCycle</span>
            </div>
            <p className="text-[16px] text-[#f6f6f6] mb-5 max-w-[500px]" style={{ fontFamily: "var(--font-roboto)" }}>
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="flex gap-4 mb-4 flex-wrap">
              <div className="flex items-center flex-1 min-w-[200px] max-w-[486px] bg-white rounded-full border border-white px-6 py-4">
                <input type="email" placeholder="Enter your email" className="w-full bg-transparent text-[#505050] text-[16px] outline-none" style={{ fontFamily: "var(--font-roboto)" }} />
              </div>
              <button className="px-7 py-4 rounded-full border border-white text-[#f6f6f6] text-[16px] whitespace-nowrap hover:bg-white hover:text-black transition-colors" style={{ fontFamily: "var(--font-roboto)" }}>
                Subscribe
              </button>
            </div>
            <p className="text-[12px] text-[#f6f6f6]/70 max-w-[500px]" style={{ fontFamily: "var(--font-roboto)" }}>
              By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
            </p>
          </div>
          <div className="shrink-0">
            <h4 className="text-[16px] font-bold text-[#f6f6f6] mb-5">Explore</h4>
            <ul className="space-y-[21px]">
              {["E-bikes", "Specs", "Our impact", "Contact us"].map((item) => (
                <li key={item}><a href="#" className="text-[14px] text-[#f6f6f6] hover:opacity-70 transition-opacity">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className="shrink-0">
            <h4 className="text-[16px] font-bold text-[#f6f6f6] mb-5">Our top picks</h4>
            <ul className="space-y-[21px]">
              {["Zoom", "EcoBoost", "Voltage", "PowerPedal"].map((item) => (
                <li key={item}><a href="#" className="text-[14px] text-[#f6f6f6] hover:opacity-70 transition-opacity">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className="shrink-0">
            <h4 className="text-[16px] font-bold text-[#f6f6f6] mb-5">Follow Us</h4>
            <ul className="space-y-[21px]">
              {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((name) => (
                <li key={name}>
                  <a href="#" className="text-[14px] text-[#f6f6f6] flex items-center gap-2 hover:opacity-70 transition-opacity">
                    <span className="w-5 h-5 rounded-sm bg-[#f6f6f6]/20 inline-flex items-center justify-center" />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          </div>
          <div className="h-px bg-[#f6f6f6]/20 mb-6" />
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-10">
            <p className="text-[14px] text-[#f6f6f6]/70" style={{ fontFamily: "var(--font-roboto)" }}>2021 Relume. All right reserved.</p>
            <div className="flex items-center gap-6 flex-wrap">
              {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((item) => (
                <a key={item} href="#" className="text-[14px] text-[#f6f6f6]/70 hover:text-[#f6f6f6] transition-colors" style={{ fontFamily: "var(--font-roboto)" }}>{item}</a>
              ))}
            </div>
          </div>
          <div className="pt-6 lg:pt-8">
            <FooterCommuteWordmark />
          </div>
        </div>
      </footer>
    </div>
  );
}
