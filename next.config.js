{
  module.exports = {
    // output: 'export'
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname:"localhost",
          port: '1337',
          pathname: '/uploads/**'
        }
      ]
    }
  }
}