import Image from "next/image";
import FloatingCards from "@/components/FloatingCards";

export default function Hero() {
  return (
    <section className="relative min-h-[94vh] w-full overflow-hidden rounded-b-[40px]">
      <Image
        src="/phone_mockup.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/25" />

      {/* Hero text */}
      <div className="absolute inset-x-0 top-[13%] flex flex-col items-center px-6 text-center">
        <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
          Feel in control of your money,{" "}
          <span className="whitespace-nowrap">anywhere in the world</span>
        </h1>
        <p className="mt-4 max-w-md text-base font-semibold text-white/75">
          Connect accounts from different countries and see your entire
          financial picture, all in one place, in any currency.
        </p>
      </div>

      {/* CTA — anchored below the floating cards */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <button
          className="rounded-full px-14 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{
            background:
              "linear-gradient(90deg, rgba(240,78,122,0.72) 0%, rgba(249,115,22,0.72) 100%)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
