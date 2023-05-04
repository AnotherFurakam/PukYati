

const main = document.getElementById("main");
const btnEnviar = document.getElementById("btn-enviar");
const input = document.getElementById("data-input");

let element = document.createElement('div');
element.setAttribute("id","modal")
const content = `
    <div class="modal-back">
        <div class="bg-dark p-4 rounded-2 shadow">
            <h1 class="text-light fs-4 text-center mb-3">Soporte de Puk-Yati</h1>
            <p class="text-light">Se te ha enviado un mensaje para recurperar tu cuenta Puk-Yati.</p>
            <div class="d-flex justify-content-center mt-2">
                <button id="btn-close" class="button text-light">Aceptar</button>
            </div>
        </div>
    </div>
`

element.innerHTML = content

btnEnviar.addEventListener("click", () => {
    if (input.value !== ''){
        main.appendChild(element);
        input.value = '';
        const btnClose = document.getElementById("btn-close");
        btnClose.addEventListener("click",() => {
            const modal = document.getElementById("modal");
            main.removeChild(modal);

        });
    }
});