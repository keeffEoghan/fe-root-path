import getBasePath from './';

const url = getBasePath()+'index.js';

console.log(url);

(async () => {
    const response = await fetch(url);

    console.log(response.ok && (await response.text()));
})();
