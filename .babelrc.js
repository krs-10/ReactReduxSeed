const path = require('path');



// const commonPlugins = [
//   [
//     require.resolve("@babel/plugin-proposal-export-default-from"),
//     require.resolve("@babel/plugin-proposal-class-properties"),
//   ],
// ];

const reactPreset = require.resolve('@babel/preset-react');
const prodEnvPreset = [
  require.resolve('@babel/preset-env'),
  {
    "targets": {
      "browsers": ["last 3 versions"],
    },
    "useBuiltIns": "entry",
    "shippedProposals": true,
  }
];
const devEnvPreset = [
  require.resolve('@babel/preset-env'),
  {
    "targets": {
      "node": "8.0",
    },
    "modules": false, 
    "useBuiltIns": false, 
    "shippedProposals": true,
  }
]

module.exports = {
  presets: [reactPreset],
  plugins: [
    require.resolve("@babel/plugin-proposal-export-default-from"),
    require.resolve("@babel/plugin-proposal-class-properties")
  ],
  env: {
    development: {
      presets: [devEnvPreset]
    },
    production: {
      presets: [prodEnvPreset]
    }
  },
};