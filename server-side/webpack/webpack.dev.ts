import webpack from 'webpack';
import { merge } from 'webpack-merge';
import config from './webpack.common';

const devConfig: webpack.Configuration = merge(config, {
  mode: 'development',
});

export default devConfig;
