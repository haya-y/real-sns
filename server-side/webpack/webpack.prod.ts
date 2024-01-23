import webpack from 'webpack';
import { merge } from 'webpack-merge';
import config from './webpack.common';

const prodConfig: webpack.Configuration = merge(config, {
  mode: 'production',
});

export default prodConfig;
