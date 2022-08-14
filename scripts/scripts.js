const adviceContainer = document.querySelector(".advice-container");
const button = document.querySelector(".button")


axios
    .get("https://api.adviceslip.com/advice")
    .then((response) => {
        console.log(response);
        adviceContainer.innerText = response.data.slip.advice;
    })
    .catch((error) => {
        console.log(error);
        quotesContainer.innerText = "Failed to get quote, please try again.";
    });

function reload() {
    reload = location.reload()
}

button.addEventListener("click", reload, false)