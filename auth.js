async function logout() {
    await supabaseClient.auth.signOut();
    window.location.href = "login.html";

}

async function login() {

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: senha
    });

    if (error) {
        alert("Erro no login: " + error.message);
        return;
    }

    const usuario = data.user;

    if (!usuario.email_confirmed_at) {
        alert("Você precisa confirmar seu email antes de entrar.");
        await supabaseClient.auth.signOut();
        return;
    }

    // ir para página inicial
    window.location.href = "index.html";
}

async function logout() {
    await supabaseClient.auth.signOut();
    window.location.href = "login.html";
}

async function verificarLogin() {

    const { data: { session } } = await supabaseClient.auth.getSession();

    if (!session) {
        window.location.href = "login.html";
        return;
    }

    const { data: { user } } = await supabaseClient.auth.getUser();

    const span = document.getElementById("usuarioEmail");

    if(span){
        span.innerText = user.email;
    }
}

async function esqueciSenha() {

    const email = prompt("Digite seu email para redefinir a senha:");

    if (!email) return;

    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + "/redefinir.html"
    });

    if (error) {
        alert("Erro ao enviar email: " + error.message);
    } else {
        alert("Email de recuperação enviado!");
    }
}





