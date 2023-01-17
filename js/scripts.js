window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let array = [];
    let array1 = [];
    let array2 = [];
    array[0] = document.getElementById("input").value;
    array1 = array.toString();
    array1 = array1.split(" ");

    array1.forEach(function(element) {
      if (element.length > 2) {
        array2.push(element);
      }
    });
    array2.reverse();
    array2.join(" ");
    const element = document.body;
    const paragraph = document.createElement("p");
    paragraph.append(array2);
    document.body.append(paragraph);

  };
}