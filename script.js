const loadData = () => {
    const firstname = document.querySelector("#firstname").value.trim();
    const lastname = document.querySelector("#lastname").value.trim();
    const birthday = document.querySelector("#birthday").value;
    const voiceGroup = document.querySelector("input[name=voice-group]:checked").value;

    return { firstname, lastname, birthday, voiceGroup };
}

const main = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    // autofill form
    if (data) {
        document.querySelector("#firstname").value = data.firstname;
        document.querySelector("#lastname").value = data.lastname;
        document.querySelector("#birthday").value = data.birthday;
        document.querySelector(`input[value=${data.voiceGroup}]`).checked = true;
    }
    document.querySelector("#submit").addEventListener("click", evt => {
        evt.preventDefault();
        // get form data
        const data = loadData();

        localStorage.setItem("data", JSON.stringify({ ...data, redirect: false }));
        location.pathname += "redirect";
    });
    document.querySelector("#copy").addEventListener("click", evt => {
        evt.preventDefault();
        // get form data
        const data = loadData();
        const url = `https://docs.google.com/forms/d/e/1FAIpQLSexAQunwzbLiapgd0MPSxpqvvuH8msvc8CWK544I6ghlr-qMg/viewform?entry.1345550671=${data.lastname},+${data.firstname}&entry.945327328=${data.birthday}&entry.1445587767=${data.voiceGroup}`;

        navigator.clipboard.writeText(url).then(() => {
            const toast = document.querySelector(".toast");
            toast.style.display = "block";
        })
    });
}

window.addEventListener("DOMContentLoaded", main);