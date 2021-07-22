const button = document.getElementById("findButton");
button.addEventListener("click", function () {
    let typedText = document.getElementById("input").value;
    let result = getAnagramsOf(typedText);
    printOnScreen(result)
});

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
  }
  console.log(palavras.length)

function getAnagramsOf(text) {
    let output = []
    palavras.map( word => {
        if (alphabetize(word) === alphabetize(text)){
            if (text !== word) output.push(word)
        }

    })
    return(output)
}

function printOnScreen(content) {
    let newElement = document.getElementById('result')
    newElement.classList.remove('hidden')
    newElement.innerHTML =''
    newElement.innerHTML = content.join(', ')
    return document.body.appendChild(newElement)

}