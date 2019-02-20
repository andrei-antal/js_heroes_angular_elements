const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  await fs.ensureDir('dist');
  // HTML example
  await fs.remove('./test-html/custom-element.js')
  await fs.remove('./test-html/polyfills.js')
  await fs.copyFile('dist/ngElem/main.js', './test-html/custom-element.js')
  await fs.copyFile('dist/ngElem/polyfills.js', './test-html/polyfills.js')
  // React example
  await fs.remove('./test-react/my-app/public/custom-element.js')
  await fs.remove('./test-react/my-app/public/polyfills.js')
  await fs.copyFile('dist/ngElem/main.js', './test-react/my-app/public/custom-element.js')
  await fs.copyFile('dist/ngElem/polyfills.js', './test-react/my-app/public/polyfills.js')
  // Vue example
  await fs.remove('./test-vue/my-project/public/custom-element.js')
  await fs.remove('./test-vue/my-project/public/polyfills.js')
  await fs.copyFile('dist/ngElem/main.js', './test-vue/my-project/public/custom-element.js')
  await fs.copyFile('dist/ngElem/polyfills.js', './test-vue/my-project/public/polyfills.js')
})();
