# fe-root-path

Small utility to handle paths on front-end for different hosts.
For hosting on local/Github/etc.

## Usage

```javascript
import rootPath from 'fe-root-path';

const url = rootPath+'path/to.asset';

console.log(url);

(async () => {
    const response = await fetch(url);

    console.log(response.ok && (await response.text()));
})();
```
