export const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

export const revealWithDelay = (delay: number) => ({
  ...reveal,
  transition: { ...reveal.transition, delay },
});
