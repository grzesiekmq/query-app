import { queries } from "./data/queries.js";
import { container } from "./components/tasks.js";
const app = {
  queries,
};

const input = document.querySelector("input");

(function makePlaceholder(container) {
  if (input.value === "") {
    container.innerHTML = "Type some text above";
  }
})(container);

function checkInput() {
  const result = app.queries.find((query) => query.name === input.value);

  result?.task();
}

input.addEventListener("input", checkInput);
