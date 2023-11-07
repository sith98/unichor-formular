const main = () => {
    document.querySelector("#submit").addEventListener("click", evt => {
        evt.preventDefault();
        // get form data
        const firstname = document.querySelector("#firstname").value;
        const lastname = document.querySelector("#lastname").value;
        const birthday = document.querySelector("#birthday").value;
        const voiceGroup = document.querySelector("input[name=voice-group]:checked").value;

        localStorage.setItem("data", JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            birthday: birthday,
            voiceGroup: voiceGroup
        }));
        window.open("/redirect", "_self")
    });
}

window.addEventListener("DOMContentLoaded", main);