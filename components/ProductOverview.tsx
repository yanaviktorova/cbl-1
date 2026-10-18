import Image from "next/image";
import { Container, Eyebrow, PatentBadge, h2Class } from "./ui";

const features = [
  {
    icon: "/icons/feature-1.svg",
    title: "No More Splatter",
    text: "Urine flow straight into the water, keeping the rim, seat, and floor completely dry.",
  },
  { icon: "/icons/feature-2.svg", title: "Washes Itself Clean", text: "Rinses clean with one press — no scrubbing needed." },
  {
    icon: "/icons/feature-3.svg",
    title: "Auto-Seals at the Bottom",
    text: "Closes tight the moment you lift it, guaranteeing zero drips on your floor or rugs.",
  },
  {
    icon: "/icons/feature-4.svg",
    title: "Easy Clip-On Fit",
    text: "Slips onto any standard toilet rim in seconds, no tools or installation required.",
  },
];

export function ProductOverview() {
  return (
    <section className="border-b border-warm-gray bg-white">
      <Container className="flex flex-col gap-8 py-14 lg:gap-10 lg:py-[100px]">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="flex flex-col items-start gap-5 lg:max-w-[780px] lg:gap-[17px]">
            <PatentBadge />
            <div className="flex flex-col gap-3 lg:gap-[17px]">
              <Eyebrow>Meet CBL-1</Eyebrow>
              <h2 className={h2Class}>
                A self-rinsing urinal that <br className="hidden xl:inline" />
                keeps the mess inside the toilet.
              </h2>
            </div>
          </div>
          <p className="text-[18px] leading-[27px] text-body lg:max-w-[467px] lg:leading-7">
            The CBL-1™ clips onto the rim in seconds. When he finishes, press on the button rinses. Lift it off and
            return it to its stand. The bottom auto-seals instantly so not a single drop hits your floor.
          </p>
        </div>

        {/* Image */}
        <div className="relative aspect-[2/1] w-full overflow-hidden rounded-[20px] bg-[#f9fafa] lg:rounded-[28px]">
          <Image
            src="/images/product-overview.webp"
            alt="CBL-1 on its stand next to a toilet"
            fill
            sizes="(min-width: 1440px) 1320px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Features */}
        <ul className="grid gap-8 lg:grid-cols-4 lg:gap-10">
          {features.map((f) => (
            <li key={f.title} className="flex gap-4 lg:flex-col lg:gap-[9px]">
              <Image src={f.icon} alt="" width={30} height={30} className="size-[30px] shrink-0" />
              <div className="flex flex-1 flex-col gap-2 lg:gap-[9px]">
                <h3 className="text-[20px] font-semibold leading-7 text-ink lg:leading-[30px]">{f.title}</h3>
                <p className="text-[18px] leading-[27px] text-body lg:leading-[26px]">{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
