// Configuration for StyleLint
// See: https://stylelint.io/user-guide/configuration/

module.exports = {
  extends: [
    // Use the Standard config as the base
    // https://github.com/stylelint/stylelint-config-standard
    'stylelint-config-standard',
    // Enforce a standard order for CSS properties
    // https://github.com/stormwarning/stylelint-config-recess-order
    'stylelint-config-recess-order',
    // Override rules that would interfere with Prettier
    // https://github.com/shannonmoeller/stylelint-config-prettier
    'stylelint-config-prettier',
    // Override rules to allow linting of CSS modules
    // https://github.com/pascalduez/stylelint-config-css-modules
    'stylelint-config-css-modules',
  ],
  plugins: [
    'stylelint-csstree-validator',
    'stylelint-no-unsupported-browser-features',
  ],

  rules: {
    // camelCase works better for css-module names:
    // 'selector-class-pattern': '^[a-z][a-zA-Z]+$',
    // 'selector-id-pattern': '^[a-z][a-zA-Z]+$',

    // fixes for Vue single file components:
    'no-empty-source': null,
    'at-rule-no-unknown': null,

    // custom plugins to work with
    'csstree/validator': true,
    'plugin/no-unsupported-browser-features': [true, { severity: 'warning' }],
  },
}
