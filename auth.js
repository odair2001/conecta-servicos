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

    const { data } = await supabaseClient
        .from("colaboradores")
        .select("*")
        .eq("user_id", user.id)
        .single();

    if(data){
        window.location.href = "minha-conta.html";
    }else{
        window.location.href = "criar-cadastro.html";
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

const { data, error } = await supabaseClient
.from("admins")
.select("*")
.eq("id", user.id)
.single();

return !!data;

}








