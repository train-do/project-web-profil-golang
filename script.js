function showProjects() {
    document.getElementById("projects").classList.remove("off")
    document.getElementById("experiences").classList.add("off")
    document.querySelector(".container-projects").classList.remove("hidden")
    document.querySelector(".container-experiences").classList.add("hidden")
}
function showExp() {
    document.getElementById("projects").classList.add("off")
    document.getElementById("experiences").classList.remove("off")
    document.querySelector(".container-projects").classList.add("hidden")
    document.querySelector(".container-experiences").classList.remove("hidden")
}
document.getElementById("form-contact").addEventListener("submit", function (event) {
    event.preventDefault()
    let email = document.getElementById("alamat-email").value
    let subject = document.getElementById("subject-email").value
    let body = document.getElementById("body-email").value
    console.log(email);
    console.log(subject);
    console.log(body);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body} text`;
})

let exp = 0
const experiences = document.querySelectorAll(".experience")
for (let i = 0; i < experiences.length; i++) {
    const element = experiences[i];
    element.addEventListener("click", function () {
        const identityValue = getComputedStyle(element).getPropertyValue('--identity').trim();
        // console.log(`Exp: ${exp}`);
        // console.log(`Identity: ${identityValue}`);
        if (exp == 0) {
            document.getElementById(`experience${identityValue}`).classList.toggle('open')
            document.getElementById(`detail-exp${identityValue}`).classList.toggle('hidden')
            exp = identityValue
        } else if (exp != identityValue) {
            document.getElementById(`experience${exp}`).classList.toggle('open')
            document.getElementById(`detail-exp${exp}`).classList.toggle('hidden')
            document.getElementById(`experience${identityValue}`).classList.toggle('open')
            document.getElementById(`detail-exp${identityValue}`).classList.toggle('hidden')
            exp = identityValue
        } else if (exp == identityValue) {
            document.getElementById(`experience${identityValue}`).classList.toggle('open')
            document.getElementById(`detail-exp${identityValue}`).classList.toggle('hidden')
            exp = 0
        }
    });
}
