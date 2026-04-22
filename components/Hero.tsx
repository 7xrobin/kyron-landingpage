import Image from "next/image";
import FloatingCards from "@/components/FloatingCards";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
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
