// Handle paths on different hosts - for local/Github/etc hosting.
export const rootPath =
    `/${((location.href.match(/:\/\/.+?\/([^\/\?]+?(?=[\/\?]|$))?/i) || [])[1] || '')}/`
        .replace(/(?:\/|.+\.html?)+/gi, '/');
