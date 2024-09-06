export const useScrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth", // Smooth scrolling
      block: "nearest", // Center the element in the view
    });
  }
};
