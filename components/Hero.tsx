import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[94vh] w-full overflow-hidden rounded-b-[60px]">
      <Image
        src="/Kyron-Hero-page-mockup.png"
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
    </section>
  );
}
