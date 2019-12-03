# `get-base-path`

Small utility to handle paths for different hosts - for hosting on local/Github/etc.

## Usage

```javascript
import getBasePath from '../';

const url = getBasePath()+'path/to.asset';

console.log(url);

(async () => {
    const response = await fetch(url);

    console.log(response.ok);
})();
```
