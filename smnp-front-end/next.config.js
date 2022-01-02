require('dotenv').config({ path: __dirname + '/.env' })

module.exports = {
  reactStrictMode: true,
  // necessary to overcome https://github.com/project-serum/anchor/issues/728
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }
    return config
  }
}
