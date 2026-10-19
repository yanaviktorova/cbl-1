"use client";

import { useState, type FormEvent } from "react";
import { cx } from "./ui";

type Status = "idle" | "loading" | "error" | "success";

/**
 * Waitlist emails go to Formspree. Can be overridden with NEXT_PUBLIC_WAITLIST_ENDPOINT in Vercel → Settings →
 * Environment Variables.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT || "https://formspree.io/f/mvkzylpr";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email: email.trim() }),
        });
        if (!res.ok) throw new Error(String(res.status));
      }
      setStatus("success");
      setMessage("You're on the list. We'll email you before launch.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  const done = status === "success";

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-2">
      <div className="flex flex-col gap-3 xl:flex-row xl:gap-[10px]">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          readOnly={done}
          aria-invalid={status === "error"}
          aria-describedby="waitlist-message"
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          className={cx(
            "h-14 w-full min-w-0 rounded-full border bg-charcoal px-5 text-[16px] leading-6 text-[#f0f2ed] outline-none transition-colors",
            "placeholder:text-border-strong xl:flex-1 lg:placeholder:text-placeholder",
            status === "error"
              ? "border-2 border-error"
              : done
                ? "border-2 border-success"
                : "border-slate hover:border-[#738075] focus:border-2 focus:border-focus",
          )}
        />
        <button
          type="submit"
          disabled={status === "loading" || done}
          className={cx(
            "min-h-[54px] shrink-0 rounded-full bg-mint px-6 py-[14px] text-[18px] font-semibold leading-[26px] text-ink transition-colors",
            "hover:bg-[#acd5cb] active:bg-[#9ccabe] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
            "disabled:cursor-default lg:min-h-14 lg:px-7",
            status === "loading" && "opacity-80",
          )}
        >
          {status === "loading" ? "Loading…" : done ? "You're in ✓" : "Join the waitlist"}
        </button>
      </div>
      <p
        id="waitlist-message"
        aria-live="polite"
        className={cx(
          "min-h-5 px-5 text-[14px] leading-5",
          status === "error" ? "text-error" : "text-success",
          (status === "idle" || status === "loading") && "invisible",
        )}
      >
        {message}
      </p>
    </form>
  );
}
