import Image from "next/image";
import { Container, Eyebrow, Note, PatentBadge, cx, h1Class } from "./ui";

const brk = <br className="hidden lg:inline" />;

export function Hero() {
  return (
    <section id="top" className="border-b border-warm-gray">
      <Container className="flex flex-col items-center gap-8 pt-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-10 lg:pt-0">
        {/* Copy */}
        <div className="flex w-full flex-col gap-8 lg:max-w-[762px] lg:flex-1 lg:justify-between lg:gap-12 lg:py-[60px]">
          <div className="flex flex-col items-start gap-4 lg:gap-3">
            <PatentBadge />
            <Eyebrow>For men who stand.</Eyebrow>
            <h1 className={h1Class}>
              Zero splash.
              <br />
              Zero drips on the floor.
            </h1>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-[18px] leading-[27px] text-body lg:max-w-[745px] lg:text-[20px] lg:leading-6">
              The CBL-1™ rests on the toilet rim with an easy clip-on fit. {brk}
              It guides the urine stream straight into the bowl {brk}
              and rinses clean with one simple press.
            </p>

            <div className="flex flex-col gap-3">
              <Note items={["Free to join", "No payment needed"]} />
              <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-6">
                <a
                  href="#waitlist"
                  className={cx(
                    "inline-flex min-h-[54px] w-full items-center justify-between rounded-full bg-primary px-6 py-[14px] text-[18px] font-semibold leading-[26px] text-white transition-colors",
                    "hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                    "lg:min-h-[46px] lg:w-auto lg:justify-center lg:gap-[6px] lg:py-[10px] lg:pl-[30px] lg:pr-6",
                  )}
                >
                  Join the waitlist
                  <Image src="/icons/arrow-up-right.svg" alt="" width={24} height={24} />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex min-h-11 items-center gap-3 py-[10px] text-[16px] font-semibold leading-6 text-ink hover:underline lg:gap-[6px]"
                >
                  <Image src="/icons/play-small.svg" alt="" width={16} height={16} />
                  See how it works
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Product image */}
        <div className="relative aspect-[451/736] w-[246px] shrink-0 lg:w-[min(451px,31vw)] lg:self-end">
          <Image
            src="/images/hero.webp"
            alt="CBL-1 self-rinsing urinal standing upright"
            fill
            priority
            sizes="(min-width: 1024px) 451px, 246px"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
