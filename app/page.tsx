import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { ProductOverview } from "@/components/ProductOverview";
import { HowItWorks } from "@/components/HowItWorks";
import { DesignFit } from "@/components/DesignFit";
import { Waitlist } from "@/components/Waitlist";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <ProductOverview />
        <HowItWorks />
        <DesignFit />
        <Waitlist />
      </main>
      <SiteFooter />
    </>
  );
}
