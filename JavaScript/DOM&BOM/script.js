//example-1
document
  .getElementById("changeTextbutton")
  .addEventListener("click", function () {
    document.getElementById("myParagraph").textContent =
      "The paragraph is changed.";
  });

//example-2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    document
      .getElementById("citiesList")
      .firstElementChild.classList.add("highlight");
  });

//example-3
document.getElementById("changeOrder").addEventListener("click", function () {
  const coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "3px";
});

//example-4
document.getElementById("addNewItem").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

//example-5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    document.getElementById("taskList").lastElementChild.remove();
  });

//example-6
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("Event handling");
  });

//example 7
document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert(`You selected ${event.target.textContent}`);
  }
});

//example 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent =
      `Feedback is ${feedback}`;
  });

//example 9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent =
    "DOM is completely loaded...";
});

//example 10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let desc = document.getElementById("descriptionText");
    desc.classList.toggle("highlight");
  });
