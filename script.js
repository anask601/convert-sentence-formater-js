function convertToWordWord() {
  convertToFormat("word-word");
}

function convertToUnderscore() {
  convertToFormat("underscore");
}

function convertToFormat(format) {
  const sentence = document.getElementById("sentenceInput").value;
  let result;

  if (format === "word-word") {
    result = convertToWordWordFormat(sentence);
  } else if (format === "underscore") {
    result = convertToUnderscoreFormat(sentence);
  }

  result = result.toLowerCase();
  document.getElementById("output").innerText = result;
}

function copyToClipboard() {
  const output = document.getElementById("output").innerText;
  navigator.clipboard
    .writeText(output)
    .then(() => {
      alert("Result copied to clipboard!");
    })
    .catch((error) => {
      console.error("Error copying to clipboard:", error);
    });
}

function reset() {
  document.getElementById("sentenceInput").value = "";
  document.getElementById("output").innerText = "";
}

function convertToWordWordFormat(sentence) {
  const words = sentence.split(" ");
  const result = words
    .map((word) => {
      return word.toLowerCase();
    })
    .join("-");
  return result;
}

function convertToUnderscoreFormat(sentence) {
  const words = sentence.split(" ");
  const result = words
    .map((word) => {
      return word.toLowerCase();
    })
    .join("_");
  return result;
}
