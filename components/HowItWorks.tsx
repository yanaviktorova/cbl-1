import Image from "next/image";
import { Container, Eyebrow, h2Class } from "./ui";

/** Put the product video link here (YouTube, Vimeo, or /video.mp4 in /public) to make the Play button work. */
const VIDEO_URL = "";

const steps = [
  { img: "/images/step-1.webp", title: "Clip it on", text: "Lift CBL-1 from its stand and set it on the toilet rim." },
  {
    img: "/images/step-2.webp",
    title: "Use & Squeeze",
    text: "Use as normal while standing, then press the handle once to rinse the bowl.",
  },
  {
    img: "/images/step-3.webp",
    title: "Return to stand",
    text: "Once you remove it from the toilet, the bottom auto-seals so you can cleanly return it to its stand.",
  },
];

function PlayButton() {
  const classes =
    "flex size-[54px] items-center justify-center rounded-full bg-ink transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:size-[88px]";
  const icon = (
    <Image src="/icons/play.svg" alt="" width={36} height={36} className="ml-[2px] size-[22px] lg:size-9" />
  );
  return VIDEO_URL ? (
    <a href={VIDEO_URL} target="_blank" rel="noreferrer" aria-label="Watch CBL-1 in action" className={classes}>
      {icon}
    </a>
  ) : (
    <button type="button" aria-label="Watch CBL-1 in action" className={classes}>
      {icon}
    </button>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-4 border-b border-warm-gray bg-white">
      <Container className="flex flex-col gap-8 py-14 lg:gap-14 lg:py-[100px]">
        <div className="flex flex-col items-center gap-3 text-center lg:gap-4">
          <Eyebrow>How it works</Eyebrow>
          <h2 className={h2Class}>Three simple steps.</h2>
        </div>

        <div className="flex flex-col gap-8">
          {/* Video preview */}
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-[20px] bg-light-gray lg:rounded-[28px]">
            <Image
              src="/images/video-preview.webp"
              alt="CBL-1 product close-up"
              fill
              sizes="(min-width: 1440px) 1320px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-[10px] bg-ink/8 lg:gap-[14px]">
              <PlayButton />
              <span className="rounded-full bg-warm-white/90 px-3 py-[5px] text-[14px] font-semibold leading-5 text-ink lg:px-[14px] lg:text-[16px] lg:leading-6">
                Watch CBL-1 in action
              </span>
            </div>
          </div>

          {/* Steps */}
          <ol className="grid gap-9 lg:grid-cols-3 lg:gap-8">
            {steps.map((s, i) => (
              <li key={s.title} className="flex flex-col gap-4">
                <div className="relative aspect-[408.67/306.5] w-full overflow-hidden rounded-[20px] bg-light-gray">
                  <Image
                    src={s.img}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[14px]">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-[16px] font-bold leading-6 text-white">
                      {i + 1}
                    </span>
                    <h3 className="text-[20px] font-semibold leading-[30px] text-ink">{s.title}</h3>
                  </div>
                  <p className="text-[18px] leading-[27px] text-body lg:leading-[26px]">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
