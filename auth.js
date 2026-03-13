async function logout() {
    await supabaseClient.auth.signOut();
    window.location.href = "login.html";

}

async function esqueciSenha() {
    const email = prompt("Digite seu email para redefinir a senha:");

    if (!email) return;

    const { data, error } = await supabaseClient.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + "/redefinir.html"
    });

    if (error) {
        alert("Erro ao enviar email: " + error.message);
    } else {
        alert("Email de recuperação enviado! Verifique sua caixa de entrada.");
    }
}

async function verificarLogin() {

    const { data: { session } } = await supabaseClient.auth.getSession();

    if (!session) {
        window.location.href = "login.html";
        return;
    }

    const { data: { user } } = await supabaseClient.auth.getUser();

    if (!user.email_confirmed_at) {
        alert("Confirme seu email antes de acessar.");
        await supabaseClient.auth.signOut();
        window.location.href = "login.html";
    }

    const span = document.getElementById("usuarioEmail");
    if(span){
        span.innerText = user.email;
    }
}

async function verificarCadastro(){

const { data: { user } } = await supabaseClient.auth.getUser();

if(!user){

window.location.href = "login.html";
return;

}

// verificar se já cadastrou colaborador
const { data: colaborador } = await supabaseClient
.from("colaboradores")
.select("id")
.eq("user_id", user.id)
.maybeSingle();

if(colaborador){

// já cadastrou
window.location.href = "minha_conta.html";

}else{

// ainda não cadastrou
window.location.href = "cadastro.html";

}

}

async function mostrarUsuarioNavbar() {

    const { data: { user } } = await supabaseClient.auth.getUser();

    if(user){
        const span = document.getElementById("usuarioEmail");

        if(span){
            span.innerText = user.email;
        }
    }
}

async function verificarAdmin(){

const { data: { user } } = await supabaseClient.auth.getUser();

if(!user) return false;

const { data } = await supabaseClient
.from("admins")
.select("id")
.eq("id", user.id)
.maybeSingle();

return !!data;

}










