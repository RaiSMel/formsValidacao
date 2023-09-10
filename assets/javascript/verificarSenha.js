export const validarSenha = () => {
    
const inputConfirmarSenha = document.querySelector("#confirmarSenha")
    inputConfirmarSenha.addEventListener('input', (event) => {

        let senha = document.querySelector("#senha");
        let senhaConfirmar = document.querySelector("#confirmarSenha");
    
        if(senha.value == senhaConfirmar.value){
            console.log(senhaConfirmar.validity);
            senhaConfirmar.setCustomValidity("");
        }
        else{
            console.log(senhaConfirmar.setCustomValidity("Senhas não batem"));
        }
        
    }
    
    
)}