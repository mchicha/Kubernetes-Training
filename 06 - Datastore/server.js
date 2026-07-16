//
// server.js
//
const
  // Get those values in runtime.
  // The variables will be passed from the Dockerfile and later on from K8S ConfigMap/Secret
  language = process.env.LANGUAGE;
  token    = process.env.TOKEN;

require("http")
  .createServer((request, response) => {
    response.write(`Language: ${language}\n`);
    response.write(`Token   : ${token}\n`);
    response.end(`\n`);
  })
  // Set the default port to 5000
  .listen(process.env.PORT || 5001);