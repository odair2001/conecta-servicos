async function verificarLogin() {
    const { data: { session } } = await supabaseClient.auth.getSession();

    if (!session) {
        window.location.href = "login.html";
    } else {
        const span = document.getElementById("usuarioEmail");
        if(span) span.innerText = session.user.email;
    }
}

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
