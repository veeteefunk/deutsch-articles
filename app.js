const articleForm = document.getElementById('article-form');
const articleInput = document.getElementById('article-input');
const result = document.getElementById("result");
const richtig = document.getElementById("richtig");
const falsch = document.getElementById("falsch");

articleForm.addEventListener('submit', e => {
    e.preventDefault();
    if(articleInput.value === "die") {
        result.style.color = "#2ecc71"
        result.style.display = "block"
        result.innerHTML = "Richtig"
        //result.style.backgroundColor = "#2ecc71"
        articleInput.style.borderColor = "#2ecc71"
    } else {
        result.style.color = "red"
        result.style.display = "block"
        result.innerHTML = "Falsch"
      //  result.style.backgroundColor = "#000000"
        articleInput.style.borderColor = "#e74c3c"
    }
})