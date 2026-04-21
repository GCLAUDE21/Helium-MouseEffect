// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

const cercleback = document.createElement("span");
cercleback.classList.add("rondback");
document.body.appendChild(cercleback);

const petitback = document.createElement("span");
petitback.classList.add("justback");
document.body.appendChild(petitback);

const pointer = document.createElement("span");
pointer.classList.add("souris");
document.body.appendChild(pointer);

const cursors = document.querySelectorAll(".rondback, .justback, .souris");
window.addEventListener("mousemove", (e) => {
  cursors.forEach((el) => {
    el.style.left = e.pageX + "px";
    el.style.top = e.pageY + "px";
  });
});
