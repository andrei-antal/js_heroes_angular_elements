const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/ngElem/runtime.js',
    './dist/ngElem/polyfills.js',
    './dist/ngElem/scripts.js',
    './dist/ngElem/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/custom-element.js');
  // HTML example
  await fs.remove('./test-html/custom-element.js')
  await fs.copyFile('elements/custom-element.js', './test-html/custom-element.js')
  // React example
  await fs.remove('./test-react/my-app/public/custom-element.js')
  await fs.copyFile('elements/custom-element.js', './test-react/my-app/public/custom-element.js')
})();
