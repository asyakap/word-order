window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function (event) {
    event.preventDefault();

    let array = [];
    let array1 = [];
    let array2 = [];

    array[0] = document.getElementById("input").value;
    array1 = array.toString();
    array1 = array1.split(" ");

    array1.forEach(function (element1) {
      let count = 0;
      array1.forEach(function (element2) {
        if (element1 === element2) {
          count += 1;
        }
      });

      array2.push(element1 + " - " + count);
      console.log(array2)
    });
      let uniqueArray = [...new Set(array2)];
      uniqueArray.forEach (function(word) {
      const paragraph = document.createElement("p");
      paragraph.append(word);
      document.body.append(paragraph);
    });
  }
}