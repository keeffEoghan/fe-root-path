export const getRootPath = (href = ((self.location && self.location.href) || '')) => 
    `/${((href.match(/:\/\/.+?\/([^\/\?]+?(?=[\/\?]|$))?/i) || [])[1] || '')}/`
        .replace(/(?:\/|.+\.html?)+/gi, '/');

export default getRootPath;
