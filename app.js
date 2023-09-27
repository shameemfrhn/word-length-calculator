document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("text-input");
    const wordCount = document.getElementById("word-count");

    textInput.addEventListener("input", countWords);

    function countWords() {
        const text = textInput.value.trim();
        const words = text.split(/\s+/);
        const numWords = words.length;

        if (text === "") {
            wordCount.textContent = "0";
        } else {
            wordCount.textContent = numWords.toString();
        }
    }
});
