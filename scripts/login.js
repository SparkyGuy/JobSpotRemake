document.addEventListener("DOMContentLoaded", function() {
    const password = document.getElementById("password");
    const trocar = document.getElementById("open-icon");

    if (trocar) {
        trocar.addEventListener("click", function () {
            if (password.type === "password") {
                password.type = "text";
                trocar.classList.remove("fi-rr-eye");
                trocar.classList.add("fi", "fi-rs-crossed-eye");
            } else {
                password.type = "password";
                trocar.classList.remove("fi-rs-crossed-eye");
                trocar.classList.add("fi", "fi-rr-eye");
            }
        });
    }
});