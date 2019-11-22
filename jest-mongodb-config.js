module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'test'
    },
    binary: {
      version: '4.2.0',
      skipMD5: true
    },
    autoStart: false
  }
};