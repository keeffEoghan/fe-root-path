# get-root-path

Small utility to handle paths for different hosts - for hosting on local/Github/etc.

## Usage

```javascript
import getRootPath from 'get-root-path';

const url = getRootPath()+'path/to.asset';

console.log(url);

(async () => {
    const response = await fetch(url);

    console.log(response.ok && (await response.text()));
})();
```
