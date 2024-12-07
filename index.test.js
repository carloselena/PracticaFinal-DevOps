const fs = require("fs");
const path = require("path");

test('La página contiene el texto "¡Hola, Mundo!"', () => {
  const htmlPath = path.join(__dirname, "index.html");
  const htmlContent = fs.readFileSync(htmlPath, "utf8");
  expect(htmlContent).toMatch(/<h1>¡Hola, Mundo!<\/h1>/);
});
