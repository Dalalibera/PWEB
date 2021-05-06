document.addEventListener("DOMContentLoaded", () => {

    const textField = document.getElementById("text_field");
    const upperCheck = document.getElementById("upper_case");
    const lowerCheck = document.getElementById("lower_case");

    upperCheck.addEventListener('click', () => {
        textField.value = textField.value.toUpperCase();
        lowerCheck.checked = false;
    });
    lowerCheck.addEventListener('click', () => {
        textField.value = textField.value.toLowerCase();
        upperCheck.checked = false;
    });
});