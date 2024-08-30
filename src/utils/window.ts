export const scrollToTop = (): void => {
  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: 0,
  });
};
