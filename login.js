const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-form-submit");

    //SCP-079 lore: Carnoval15, our web developer, accidently leaked the admin password in this very script, Apraxed has been trying to find a way to hide it again//

    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;
        
        if (username === "Bot dev" && password === "@079") {
                alert("You have successfully logged in.");
                location.reload();
                window.location.replace("adminpanel.html");
            }
        else if (username !== "Bot dev" && password === "@079") {
                alert("You just entered wrong username... Try again")
                location.reload();
            }
        else if (username === "Bot dev" && password !== "@079") {
                alert("HOW tf you forgot the password???")
                location.reload();
            }
        else if (username === aprxd && password === aprxdpass) {
                alert('Welcome Zack');
                location.reload();
                window.location.replace('owner.html')
            }
        if (username !== "Bot dev" && password !== "@079") {
                alert("Ok Ok Ok, you entered both filleds wrongly, u may not be one of the devs...")
                location.reload();
            }
        })