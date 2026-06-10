const text = document.getElementById("text");
const button = document.getElementById("nextBtn");

const messages = [
  "eu poderia simplesmente mandar uma mensagem e tals.",

  "mas achei que seria mais interessante fazer isso de um jeito diferente.",

  "então aqui estamos.",

  "eu gosto bastante de conversar com você.",

  "e pensei que seria legal passar um tempo com você fora da faculdade.",
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
    então aqui vai um convite para você:
    <br><br>
    como vc disse que vai viajar depois da prova,
    achei que seria legal te fazer esse convite antes disso.
    <br><br>
    o que você acha de sairmos juntos algum dia desses?
    `;

  button.style.display = "none";

  const choice = document.createElement("div");

  choice.className = "choice";

  choice.innerHTML = `
        <button class="accept" onclick="accepted()">
            gostaria
        </button>

        <button class="maybe" onclick="maybe()">
            quem sabe outro dia
        </button>
    `;

  document.querySelector(".card").appendChild(choice);
}

function accepted() {
  document.querySelector(".card").innerHTML = `
        <h1>Ótimo.</h1>

        <p>
            fico feliz que tenha gostado da ideia.
            <br><br>
            agora é só me mandar uma mensagem
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

  p.style.opacity = Math.random() * 0.4;

  particles.appendChild(p);
}
