export const scrollToTop = () => {
  if (window.scrollY > 100) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
