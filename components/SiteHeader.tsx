import { Container, Dot } from "./ui";

export function SiteHeader() {
  return (
    <header className="border-b border-warm-gray">
      <Container className="flex items-center justify-between py-4 lg:py-3">
        <a href="#top" className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-[10px]" aria-label="CBL-1 home">
          <span className="text-[13px] font-semibold leading-5 text-muted-dark lg:text-[16px] lg:leading-6">
            Clean Bathroom Labs
          </span>
          <Dot className="hidden text-ink lg:inline-flex" />
          <span className="text-[18px] font-bold leading-6 text-ink lg:text-[20px]">CBL-1™</span>
        </a>

        <a
          href="#waitlist"
          className="inline-flex min-h-11 items-center rounded-full bg-primary px-4 py-3 text-[13px] font-semibold leading-5 text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:bg-primary-pressed lg:min-h-0 lg:px-5 lg:py-2 lg:text-[16px] lg:leading-6"
        >
          Get early access
        </a>
      </Container>
    </header>
  );
}
