document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");
    const userTableBody = document.getElementById("userTableBody");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const contact = document.getElementById("contact").value.trim();
            const address = document.getElementById("address").value.trim();

            if (!name || !email || !contact || !address) {
                alert("All fields are required!");
                return;
            }

            const user = { name, email, contact, address };

            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

            alert("User registered successfully!");
            registerForm.reset();
        });
    }

    if (userTableBody) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.forEach((user) => {
            let row = userTableBody.insertRow();
            row.insertCell(0).textContent = user.name;
            row.insertCell(1).textContent = user.email;
            row.insertCell(2).textContent = user.contact;
            row.insertCell(3).textContent = user.address;
        });
    }
});
