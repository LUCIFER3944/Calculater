

document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector("input");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const buttonText = button.innerText;

            if (buttonText === "=") {
                try {
                    const result = eval(input.value);
                    input.value = isNaN(result) ? " " : result;
                } catch (error) {
                    input.value = "Error";
                }
            } else if (buttonText === "C") {
                input.value = "";
            } else {
                input.value += buttonText;
            }
        });
    });
});
