const CSP = {
  "default-src": [
    "'self'",
  ],
  "script-src": [
    "'self'",
  ],
  "style-src": [
    "'self'",
  ],
  "font-src": [
    "'self'",
  ],
};

module.exports = Object.entries(CSP)
    .map(([type, values]) => `${type} ${values.join(" ")}`)
    .join("; ")
