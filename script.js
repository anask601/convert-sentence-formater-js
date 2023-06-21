function convertToSnakeObjToTitleObj() {
  const sentence = document.getElementById("sentenceInput").value;
  const result = snakeObjToTitleObj(sentence);
  document.getElementById("output").innerText = JSON.stringify(
    result,
    null,
    2
  ).toLowerCase();
}

function convertToWordWord() {
  const sentence = document.getElementById("sentenceInput").value;
  const result = convertToWordWordFormat(sentence);
  document.getElementById("output").innerText = result.toLowerCase();
}

function convertToUnderscore() {
  const sentence = document.getElementById("sentenceInput").value;
  const result = convertToUnderscoreFormat(sentence);
  document.getElementById("output").innerText = result.toLowerCase();
}

function snakeObjToTitleObj(sentence) {
  const words = sentence.split(" ");
  const titleObj = words.reduce((obj, word) => {
    const camelCaseKey = word.charAt(0).toLowerCase() + word.slice(1);
    obj[camelCaseKey] = word;
    return obj;
  }, {});
  return titleObj;
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

function convertToWordWordFormat(sentence) {
  const words = sentence.split(" ");
  const wordWordFormat = words.join("-");
  return wordWordFormat;
}

function convertToUnderscoreFormat(sentence) {
  const words = sentence.split(" ");
  const underscoreFormat = words.join("_");
  return underscoreFormat;
}
