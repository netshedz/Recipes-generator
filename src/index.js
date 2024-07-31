function generateRecipes(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "chicken stew recipes:chicken, chicken spice, paprika",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement = document.querySelector("#recipe-generator-form");
formElement.addEventListener("submit", generateRecipes);
