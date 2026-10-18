import Image from "next/image";
import { Container } from "./ui";

export function DesignFit() {
  return (
    <section className="border-b border-warm-gray">
      <Container className="py-14 lg:py-[100px]">
        <div className="relative flex flex-col gap-6 overflow-hidden rounded-[20px] bg-[#f6f6f6] pt-7 lg:block lg:aspect-[1320/800] lg:rounded-[28px] lg:p-0">
          {/* Desktop: full composition as the card background */}
          <Image
            src="/images/design-fit.webp"
            alt=""
            fill
            sizes="(min-width: 1440px) 1320px, 100vw"
            className="hidden object-cover lg:block"
          />

          <div className="flex flex-col gap-4 px-6 lg:absolute lg:right-[4.55%] lg:top-[7.5%] lg:z-10 lg:items-end lg:gap-5 lg:px-0 lg:text-right">
            <h2 className="text-[34px] font-bold leading-[38px] tracking-[-1px] text-ink lg:text-[min(5vw,72px)] lg:leading-[1.111] lg:tracking-[-2px]">
              Designed to fit.
            </h2>
            <p className="text-[18px] leading-[27px] text-body lg:leading-7">
              See how CBL-1 attaches between <br className="hidden lg:inline" />
              the toilet seat and lid for a secure, seamless fit.
            </p>
          </div>

          {/* Mobile: product shot below the text */}
          <div className="relative ml-8 mr-[50px] aspect-[1001/800] lg:hidden">
            <Image
              src="/images/design-fit-mobile.webp"
              alt="CBL-1 attached between the toilet seat and lid"
              fill
              sizes="90vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
