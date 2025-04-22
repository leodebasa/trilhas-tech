document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav .menu a");
    const sections = document.querySelectorAll(".section");
    const cards = document.querySelector(".cards"); // pegando os cards
  
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
  
        const targetId = link.getAttribute("data-section");
  
        // Esconde todas as seções
        sections.forEach((section) => {
          section.classList.remove("active");
        });
  
        // Mostra a seção clicada
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.classList.add("active");
        }
  
        // Mostra os cards só na seção "trilhas"
        if (cards) {
          cards.style.display = (targetId === "trilhas") ? "flex" : "none";
        }

        
  
        // Scroll suave até o topo
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    });
  });
  