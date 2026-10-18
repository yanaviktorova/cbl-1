import { Container, Dot } from "./ui";

/** Change to the client's real contact address. */
const CONTACT_HREF = "mailto:hello@example.com";

export function SiteFooter() {
  return (
    <footer className="bg-warm-gray">
      <Container className="flex flex-col gap-5 pb-11 pt-8 lg:gap-[15px] lg:px-[72px]">
        <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-0">
            <p className="flex items-center gap-2 text-[14px] font-bold leading-[22px] text-ink lg:gap-0">
              Clean Bathroom Labs
              <Dot className="inline-flex w-1 lg:w-5" />
            </p>
            <p className="text-[14px] leading-[22px] text-muted">© 2026 Walter Wimmers Limited. All rights reserved.</p>
          </div>
          <a
            href={CONTACT_HREF}
            className="inline-flex min-h-11 items-center self-start text-[14px] font-semibold leading-[22px] text-ink underline hover:text-primary lg:self-auto"
          >
            Contact
          </a>
        </div>
        <p className="max-w-[880px] text-[14px] leading-5 text-muted">
          Clean Bathroom Labs™ and CBL-1™ trademarks reserved. Our products are protected under several pending
          international utility patents and several design patents. Unauthorized reproduction is strictly prohibited.
        </p>
      </Container>
    </footer>
  );
}
