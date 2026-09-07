/**
 * Precompiles each component's `template:` string into a `render` function
 * (plus `staticRenderFns`) so the browser never has to compile Vue templates
 * at runtime. That lets the CSP served for /dash drop 'unsafe-eval' from
 * script-src, since Vue's runtime template compiler is the only thing in
 * this app that needs it.
 *
 * Run with: node build/precompile-templates.js
 * Then swap public/app/js/external/vue.js for the runtime-only build.
 */
const fs = require("fs");
const path = require("path");
const compiler = require("vue-template-compiler");

const jsDir = path.join(__dirname, "..", "public", "app", "js");
const files = fs
  .readdirSync(jsDir)
  .filter((f) => f.endsWith(".js"))
  .sort();

const TEMPLATE_RE = /template:\s*`([\s\S]*?)`,\n(\}\);?\s*)$/;

for (const file of files) {
  const filePath = path.join(jsDir, file);
  const src = fs.readFileSync(filePath, "utf8");
  const match = src.match(TEMPLATE_RE);
  if (!match) {
    console.log(`skip ${file} (no template: literal found)`);
    continue;
  }

  const [fullMatch, template, closing] = match;
  const { render, staticRenderFns, errors } = compiler.compile(template, {
    preserveWhitespace: false,
  });
  if (errors && errors.length) {
    throw new Error(`Template compile errors in ${file}:\n${errors.join("\n")}`);
  }

  const renderBlock = `render: function () {${render}},`;
  const staticBlock =
    staticRenderFns.length === 0
      ? "staticRenderFns: [],"
      : `staticRenderFns: [\n${staticRenderFns
          .map((fn) => `    function () {${fn}},`)
          .join("\n")}\n  ],`;

  const replacement = `${renderBlock}\n  ${staticBlock}\n${closing}`;
  fs.writeFileSync(filePath, src.replace(fullMatch, replacement));
  console.log(`compiled ${file}`);
}
