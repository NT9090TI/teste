const text = document.getElementById("text");
const button = document.getElementById("nextBtn");

const messages = [
  "Eu poderia simplesmente mandar uma mensagem.",

  "Mas achei que seria mais interessante fazer isso de um jeito diferente.",

  "Então aqui estamos.",

  "Gosto bastante das nossas conversas.",

  "E pensei que seria legal continuar uma delas pessoalmente.",
];

let step = 0;

button.addEventListener("click", () => {
  if (step < messages.length) {
    text.textContent = messages[step];

    step++;
  } else {
    showInvite();
  }
});

function showInvite() {
  text.innerHTML = `
    O que você acha de tomarmos um café
    algum dia desses?
    `;

  button.style.display = "none";

  const choice = document.createElement("div");

  choice.className = "choice";

  choice.innerHTML = `
    <button class="accept" onclick="accepted()">
        Aceito
    </button>

    <button class="maybe" onclick="maybe()">
        Quem sabe outro dia
    </button>
    `;

  document.querySelector(".card").appendChild(choice);
}

function accepted() {
  document.querySelector(".card").innerHTML = `
    <h1>Ótimo.</h1>

    <p>
        Fico feliz que tenha aceitado.
        <br><br>
        Agora é só me mandar uma mensagem
        e combinamos um dia.
    </p>
    `;
}

function maybe() {
  document.querySelector(".card").innerHTML = `
    <h1>Tudo bem.</h1>

    <p>
        Obrigado por ter chegado até aqui.
    </p>
    `;
}

const particles = document.getElementById("particles");

for (let i = 0; i < 100; i++) {
  const p = document.createElement("div");

  p.classList.add("particle");

  p.style.left = Math.random() * 100 + "%";

  p.style.animationDuration = 10 + Math.random() * 20 + "s";

  particles.appendChild(p);
}
