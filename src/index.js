function handleSubmit() {
    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value, 10);
    let email = document.getElementById("email").value;

    if (isNaN(age) || age <= 0) {
        alert("Please enter a valid age.");
        return;
    }

    if (age < 12) {
        alert(`Hi ${name}, you are ${age} years old and you are too young to register. Sorry😔😔`);
    }
    else if (age >= 12 && age < 18) {
        alert(`Hi ${name}, you are ${age} years old and you have limited options to register for. We will keep in touch via your email: ${email} 👋👋`);
    }
    else if (age >= 18) {
        alert(`Hi ${name}, you are ${age} years old and you can register for any option of your choosing. We will keep in touch via your email: ${email} 👋👋`);
    }

}