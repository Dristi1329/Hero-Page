gsap.to(".hero-content", { opacity: 1, y: 0, duration: 1, delay: 0.3 });
gsap.to(".hero-images", { opacity: 1, y: 0, duration: 1, delay: 0.1 });

document.querySelectorAll(".hero-image").forEach((image) => {
  image.addEventListener("mousemove", (e) => {
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(image, {
      x: x / 10,
      y: y / 10,
      duration: 0.9,
      ease: "power2.out",
    });
  });

  image.addEventListener("mouseleave", () => {
    gsap.to(image, { x: 0, y: 0, duration: 0.9 });
  });
});
