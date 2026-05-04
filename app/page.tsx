"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SectionBlock from "@/components/SectionBlock";
import BalanceCard from "@/components/cards/BalanceCard";
import BudgetCard from "@/components/cards/BudgetCard";
import GoalCard from "@/components/cards/GoalCard";
import PortfolioCard from "@/components/cards/PortfolioCard";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="relative">
        <Nav />
        <Hero />
      </div>

      <SectionBlock
        label="The Problem"
        title="Life across borders is complex. Your money doesn't have to be."
        description="No more opening five apps to add up what's yours. No more mental math at the grocery store. Just one clear view of your money, in every country you wanna be."
        ctaText="Get early access"
        card={<BalanceCard expanded={true} onToggle={() => {}} />}
        imageSrc="/sections/person_airport.png"
        imageAlt="Person at airport"
        imageFirst={false}
      />

      <SectionBlock
        label="Budgeting"
        title="Spend with intention, wherever you are."
        description="Budget across currencies without mental math. Know exactly where your money goes in every country, every week, every month."
        ctaText="Get early access"
        card={<BudgetCard expanded={true} onToggle={() => {}} />}
        imageSrc="/sections/person_beach.png"
        imageAlt="Person at beach"
        imageFirst={true}
      />

      <SectionBlock
        label="Savings"
        title="Set goals. Stay on track. Anywhere."
        description="Whether you're saving in euros or reais, Kyron keeps your milestones in sight. Set targets in any currency and watch your progress in real time."
        ctaText="Get early access"
        card={<GoalCard expanded={true} onToggle={() => {}} />}
        imageSrc="/sections/person_hike.png"
        imageAlt="Person hiking"
        imageFirst={false}
      />

      <SectionBlock
        label="Investments"
        title="Grow across markets, in any currency."
        description="Track your portfolio across countries and see your real returns in the currency that matters to you. No more converting, no more guessing."
        ctaText="Get early access"
        card={<PortfolioCard expanded={true} onToggle={() => {}} />}
        imageSrc="/sections/person_lake.png"
        imageAlt="Person at lake"
        imageFirst={true}
      />
    </main>
  );
}
