import Image from "next/image";
import { Container, Eyebrow, cx, h2Class } from "./ui";

const problems = [
  { title: "Tiny drops land everywhere", text: "Urine bounces onto the seat, rim, and floor, unseen until odors start." },
  { title: "Constant wiping", text: "Keeping the base of the toilet clean turns into an endless chore." },
  { title: "Shared bathroom frustration", text: "Family and guests notice the spots and smells immediately." },
];

export function Problem() {
  return (
    <section className="border-b border-warm-gray">
      <Container className="flex flex-col gap-8 py-14 lg:flex-row-reverse lg:items-center lg:gap-[60px] lg:py-[100px]">
        {/* Copy (first on mobile, right column on desktop) */}
        <div className="flex flex-col gap-4 lg:flex-1 lg:self-stretch lg:justify-between">
          <div className="flex flex-col gap-3 lg:gap-[15px]">
            <Eyebrow>The problem</Eyebrow>
            <h2 className={h2Class}>
              Standing up creates an <br className="hidden lg:inline" />
              invisible mess.
            </h2>
          </div>

          <ol>
            {problems.map((p, i) => (
              <li
                key={p.title}
                className={cx(
                  "flex items-start gap-4 py-5 lg:gap-5 lg:pt-[21px]",
                  i === 1 && "border-y border-border",
                )}
              >
                <span className="w-6 shrink-0 text-[14px] font-semibold leading-7 text-muted lg:min-w-7 lg:w-auto lg:pt-[2px] lg:leading-[22px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-1 flex-col gap-1 lg:gap-[2px]">
                  <h3 className="text-[20px] font-semibold leading-7 text-ink lg:leading-[30px]">{p.title}</h3>
                  <p className="text-[18px] leading-[27px] text-body lg:leading-[26px]">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Image (after copy on mobile, left column on desktop) */}
        <div className="relative aspect-[1283/1226] w-full lg:w-[46.1%] lg:shrink-0">
          <Image
            src="/images/problem.webp"
            alt="Top view of a toilet with urine droplets on the seat and floor"
            fill
            sizes="(min-width: 1024px) 609px, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
