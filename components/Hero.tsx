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
      <FloatingCards />
    </section>
  );
}
