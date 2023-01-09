import ASelectorator from "./components/ASelectorator/index.js"

if (!customElements.get("a-selectorator")) {
    customElements.define("a-selectorator", ASelectorator);
}
