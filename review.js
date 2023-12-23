window.addEventListener("DOMContentLoaded", function (){
    const register = this.document.getElementById("register");
    register.addEventListener("click", function (){
        registerFun ();
    })
})

function registerFun () {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    alert(`Hello ${firstName} ${lastName}`);
}