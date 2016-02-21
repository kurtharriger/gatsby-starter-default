
module.exports = function(config, env) {
  config = config.merge(function(cfg) {
    cfg.resolveLoader.modulesDirectories.unshift(`${__dirname}/loaders`);
    //cfg.resolve.modulesDirectories.push('/usr/local/lib/node_modules/gatsby/node_modules');
    return cfg;
  });
  return config;
}
