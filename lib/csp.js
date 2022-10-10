const CSP = {
  "default-src": [
    "'self'",
  ],
  "script-src": [
    "'unsafe-inline'",
    "'unsafe-eval'",
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
