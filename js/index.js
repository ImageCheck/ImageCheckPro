
const btnEnviarFrmContacto = document.getElementById('btnEnviarFrmContacto');

const txtNombreCompleto = document.getElementById('txtNombreCompleto');

const txtEmail = document.getElementById('txtEmail');

const txtCelular = document.getElementById('txtCelular');

const chkTerminos = document.getElementById('chkTerminos');


$(btnEnviarFrmContacto).on("click", e => {
        
    e.preventDefault();
    e.stopImmediatePropagation();
    $("#mdlContacto").modal("hide");
    
    if(
        txtNombreCompleto.value.length > 0 &&
        txtEmail.value.length > 0 &&
        txtCelular.value.length > 0 &&
        chkTerminos.checked
    )
    {
        const toast = document.createElement('div');

        toast.innerHTML = `
            <div class="w-100 d-flex justify-content-center"
            style=" position: fixed; z-index: 100; top: 0; left: 0; margin-top: 10px; ">
                <div class="alert text-white" style="background:#7EDF9A" role="alert">
                Gracias por regístrate nos contactaremos pronto.
                </div>
            </div>
        `;

      document.body.appendChild(toast);
      document.getElementById("frmContacto").reset();
      setTimeout(() => {
        toast.remove();
      }, 3500);
    }

});