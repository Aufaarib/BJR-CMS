const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  devIndicators: {
    buildActivity: false,
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/authentication/sign-in",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/authentication/sign-in",
        statusCode: 301,
      },
    ];
  },
};
