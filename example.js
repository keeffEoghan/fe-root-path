import getRoot from './';

const url = getRoot()+'index.js';

console.log(url);

(async () => {
    const response = await fetch(url);

    console.log(response.ok && (await response.text()));
})();
