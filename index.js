export const rootPath =
    `/${((location.href.match(/:\/\/.+?\/([^\/\?]+?(?=[\/\?]|$))?/i) || [])[1] || '')}/`
        .replace(/(?:\/|.+\.html?)+/gi, '/');

export default rootPath;
