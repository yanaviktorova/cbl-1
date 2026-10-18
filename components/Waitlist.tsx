import Image from "next/image";
import { Container, Note } from "./ui";
import { WaitlistForm } from "./WaitlistForm";

export function Waitlist() {
  return (
    <section id="waitlist" className="scroll-mt-4">
      <Container className="pb-6 pt-14 lg:py-[100px]">
        <div className="flex flex-col gap-8 rounded-[28px] bg-ink p-6 lg:min-h-[421px] lg:flex-row lg:gap-[60px] lg:rounded-[32px] lg:p-[60px]">
          <div className="flex flex-col gap-6 lg:flex-1 lg:justify-between">
            <div className="flex flex-col gap-4 lg:gap-5">
              <Note items={["Free to join", "Unsubscribe anytime"]} />
              <h2 className="text-[34px] font-bold leading-[38px] tracking-[-1px] text-warm-white lg:text-[min(3.6vw,52px)] lg:leading-[1.04] lg:tracking-[-2px]">
                Be the first to get The&nbsp;CBL-1™.
              </h2>
              <p className="text-[18px] leading-[27px] text-border-strong lg:max-w-[440px] lg:leading-7">
                Join the waitlist for early access discounts and launch updates. We only email about product news.
              </p>
            </div>
            <WaitlistForm />
          </div>

          <div className="relative flex aspect-[294/242] w-full shrink-0 items-center justify-center overflow-hidden rounded-[20px] bg-[#f9f9f9] sm:max-w-[365px] lg:aspect-auto lg:h-[301px] lg:w-[365px]">
            <Image src="/images/waitlist.webp" alt="CBL-1 on its stand" fill sizes="(min-width: 1024px) 365px, 100vw" className="object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
