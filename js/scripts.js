
function handleForm(event) {
  event.preventDefault();
  const userSelections = document.querySelectorAll("input:checked");
  console.log(userSelections);
  userArray = [];
  const userSelectionsArray = Array.from(userSelections);
  console.log(userSelectionsArray);
  userSelectionsArray.forEach(function(element) {
    userArray.push(element.value);
  });

  userArray.sort();
  userArray1 = userArray.toString().toUpperCase().split(",");
  
  document.body.innerHTML = "";
  
  
  // create results heading
  const resultsHeading = document.createElement("h2");
  resultsHeading.append("Here is what you need to buy:");
  document.body.append(resultsHeading);

  console.log(userArray1);
  userArray1.forEach(function(element) {
    console.log(element);
    const paragraph = document.createElement("p");
    paragraph.append(element);
    document.body.append(paragraph);
  });


}

window.addEventListener("load", function() {
  document.querySelector("form#groceries").addEventListener("submit", handleForm);
});