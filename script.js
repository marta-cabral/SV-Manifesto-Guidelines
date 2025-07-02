//animação dos blocos do header

gsap.to(".a1",{
    y:-40,
    duration: 1,
    ease: "slow(0.2,1,false)",
})

gsap.to(".a2",{
    y:-40,
    duration: 2,
    ease: "slow(0.2,1,false)",
})

gsap.to(".a3",{
    y:-40,
    duration: 2.5,
    ease: "slow(0.2,1,false)",
})

//pequeno movimento das imagens quando são visualizadas
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".img-grid").forEach((img) => {
  gsap.from(img, {
    y: 40,           // deslocamento para baixo
    opacity: 0,      // começa transparente
    duration: 1.2,   // duração da animação
    ease: "power3.out",
    scrollTrigger: {
      trigger: img,
      start: "top 90%",   // quando a imagem estiver 90% do viewport para baixo
      toggleActions: "play none none none",
      once: true          // anima apenas uma vez
    }
  });
});

//scroll smoother - ele funciona, mas remove os stickys

//const smoother = ScrollSmoother.create({
  //wrapper: "#smooth-wrapp",
  //content: "#smooth-content",
  //smooth: 1,
  //effects: true,
//});

//trigger class sticky2
//ScrollTrigger.create({
  //trigger: ".",
  //start: "top top",
  //end: "bottom top", // altura do "sticky"
  //pin: true,
  //pinSpacing: false, // se quiseres que o espaço não seja mantido
//});
