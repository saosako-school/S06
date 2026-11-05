// Vite turns this import into a production-safe URL. Keep it as a file so
// even this tiny example demonstrates a separately deployed asset.
// @deno-types="./asset-url.d.ts"
import tileUrl from "./assets/tile.svg?no-inline";

const app = document.querySelector<HTMLElement>("#app")!;

const heading = document.createElement("h1");
heading.textContent = "D1 project";

const image = document.createElement("img");
image.src = tileUrl;
image.alt = "A teal tile with a cream circle";
image.width = 96;
image.height = 96;

const message = document.createElement("p");
message.textContent = "Your project starts here.";

const button = document.createElement("button");
button.textContent = "Click me";
button.style.position = "fixed"; // pin to the viewport's top right
button.style.top = "12px";
button.style.right = "12px";
button.style.padding = "10px 20px";
button.style.backgroundColor = "#14532d"; // dark green
button.style.color = "white";
button.style.fontSize = "1.25rem";
button.style.border = "none";
button.style.borderRadius = "8px";
button.style.cursor = "pointer";

let clicks = 0;
button.addEventListener("click", () => {
  clicks += 1;
  message.textContent = clicks === 1
    ? "You clicked the button once."
    : `You clicked the button ${clicks} times.`;
});

app.append(heading, image, message, button);
