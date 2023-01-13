const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cpcr33',
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/"
  },
});
