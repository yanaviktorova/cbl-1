import type { ReactNode } from "react";

/** Shared layout + typography pieces used by every section. */

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Centers content at max 1440px; 24px side padding on mobile, 60px on desktop. */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("mx-auto w-full max-w-[1440px] px-6 lg:px-[60px]", className)}>{children}</div>;
}

/** Hero-size heading: 44/48 on mobile → 72/80 on desktop. */
export const h1Class =
  "font-bold text-ink text-[44px] leading-[48px] tracking-[-1.5px] lg:text-[min(5vw,72px)] lg:leading-[1.111] lg:tracking-[-2px]";

/** Section heading: 34/38 on mobile → 54/56 on desktop. */
export const h2Class =
  "font-bold text-ink text-[34px] leading-[38px] tracking-[-1px] lg:text-[min(3.75vw,54px)] lg:leading-[1.037] lg:tracking-[-2px]";

/** Body text: 18/27 on mobile → 18/26 on desktop. */
export const bodyClass = "text-[18px] leading-[27px] text-body lg:leading-[26px]";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cx("text-[14px] font-semibold uppercase leading-[22px] tracking-[2px] text-primary", className)}>
      {children}
    </p>
  );
}

export function PatentBadge() {
  return (
    <span className="inline-flex rounded-full border border-border px-3 py-1 text-[14px] font-semibold leading-5 text-muted-dark">
      Patent pending
    </span>
  );
}

/** The small "•" separator (the charm:menu-kebab icon in Figma: a 4px dot in a 20px box). */
export function Dot({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cx("size-5 shrink-0 items-center justify-center", className ?? "inline-flex")}>
      <span className="size-1 rounded-full bg-current" />
    </span>
  );
}

/** "Free to join • No payment needed" style note. */
export function Note({ items, className }: { items: [string, string]; className?: string }) {
  return (
    <p className={cx("flex items-center text-[14px] leading-4 text-muted", className)}>
      <span>{items[0]}</span>
      <Dot />
      <span>{items[1]}</span>
    </p>
  );
}
