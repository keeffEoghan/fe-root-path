export const getBasePath = (href = ((self.location && self.location.href) || '')) =>
    `/${((href.match(/:\/\/.+?\/([^\/\?]+?(?=[\/\?]|$))?/i) || [])[1] || '')}/`
        .replace(/(?:\/|.+\.html?)+/gi, '/');

export default getBasePath;
