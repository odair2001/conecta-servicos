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