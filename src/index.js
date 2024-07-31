function displayRecipes(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipes(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "2f93ebcd2o4334a22af8dt6e0784500a";
  let context =
    "I love to cook . your mission is to generate recipes in basic html.Make sure to follow the user instructions.always list all the recipes.offer readers a range of delicious and practical meal options, provide healthy and easy-to-make dishes. also add ingredients.always separate the recipes and ingredients with a line.Please make sure to include the signature always at the bottom of the page and the signature should be inside <strong>element:Dzhivhuho Netshedzo❤️";
  let prompt = `user instructions:Generate recipes ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#recipe");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating recipes for.. ${instructionInput.value}</div>`;

  axios.get(apiUrl).then(displayRecipes);
}

let formElement = document.querySelector("#recipe-generator-form");
formElement.addEventListener("submit", generateRecipes);
