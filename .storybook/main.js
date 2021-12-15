module.exports = {
  "stories": [
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    "@storybook/addon-a11y",
    "storybook-addon-next-router"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}
