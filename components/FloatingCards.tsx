"use client";

import { useState, useEffect } from "react";
import BalanceCard   from "@/components/cards/BalanceCard";
import GoalCard      from "@/components/cards/GoalCard";
import PortfolioCard from "@/components/cards/PortfolioCard";
import BudgetCard    from "@/components/cards/BudgetCard";

type CardIndex = 0 | 1 | 2 | 3;

export default function FloatingCards() {
  const [active, setActive] = useState<CardIndex | null>(null);

  useEffect(() => {
    const id = setInterval(
      () => setActive(prev => (prev === null ? 0 : ((prev + 1) % 4) as CardIndex)),
      60_000,
    );
    return () => clearInterval(id);
  }, []);

  const toggle = (i: CardIndex) => setActive(prev => (prev === i ? null : i));

  return (
    <>
      <BalanceCard   expanded={active === 0} onToggle={() => toggle(0)} />
      <PortfolioCard expanded={active === 1} onToggle={() => toggle(1)} />
      <GoalCard      expanded={active === 2} onToggle={() => toggle(2)} />
      <BudgetCard    expanded={active === 3} onToggle={() => toggle(3)} />
    </>
  );
}
