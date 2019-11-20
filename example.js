import rootPath from './';

const url = rootPath+'index.js';

console.log(url);

(async () => {
    const response = await fetch(url);

    console.log(response.ok && (await response.text()));
})();
