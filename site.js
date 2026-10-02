const decisions = {
  marriage: {
    meta: "45 questions · 17 areas",
    title: "Are we ready for marriage?",
    copy: "Explore expectations, conflict habits, money, family boundaries, intimacy, and the future you are actually choosing together.",
    question: "“Can we discuss difficult topics without punishment, withdrawal, or pressure?”",
  },
  career: {
    meta: "45 questions · 20 areas",
    title: "Am I ready to change careers?",
    copy: "Examine motivation, financial runway, transferable strengths, learning demands, support, and the cost of staying where you are.",
    question: "“Do I understand what I am moving toward, not only what I want to escape?”",
  },
  move: {
    meta: "45 questions · 17 areas",
    title: "Am I ready to move abroad?",
    copy: "Look closely at legal preparation, language, work, money, relationships, culture, health, and the realities of starting again.",
    question: "“Do I have a workable plan for the first difficult months, not only the ideal first year?”",
  },
  parenthood: {
    meta: "60 questions · 17 areas",
    title: "Am I ready for parenthood?",
    copy: "Reflect on health, partnership, care, finances, identity, support, values, and the daily responsibility behind the wish.",
    question: "“Who can support us when energy, time, or money becomes more limited than expected?”",
  },
};

const tabs = document.querySelectorAll("[data-decision]");
const meta = document.querySelector("[data-decision-meta]");
const title = document.querySelector("[data-decision-title]");
const copy = document.querySelector("[data-decision-copy]");
const question = document.querySelector("[data-decision-question]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const item = decisions[tab.dataset.decision];
    tabs.forEach((candidate) => {
      const active = candidate === tab;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-selected", String(active));
    });
    meta.textContent = item.meta;
    title.textContent = item.title;
    copy.textContent = item.copy;
    question.textContent = item.question;
  });
});

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 24), { passive: true });

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  document.body.classList.toggle("menu-open", open);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});
