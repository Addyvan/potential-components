This repo is just for testing out potential components. 

At the moment it contains:
 - Language Translation Component
 
I'd like to, for now, break down components into categories such as:
 - components: low level modular components
 - page-components: higher level components that use configurations of components to streamline page creation
 - action-components: higher level components that may or may not use our components in order to perform actions (ex: LanguageToggle, interactive charts etc.. )

## Streamlining Translation

Ive created a Bilingual Layout Component that passes down the *t()* and *i18n* to all children. This way, you can always easily access i18next info via *this.props.t* or *this.props.i18n*. See *src/components/BilingualLayout.js* for more info. This makes adding translation very simple and removes the need for webpack/eslint stuff.
