[![Youtube][youtube-shield]][youtube-url]
[![Facebook-Page][facebook-shield]][facebook-url]
[![Facebook-Group][facebook-shield]][facebook-group-url]
[![Instagram][instagram-shield]][instagram-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT Title -->
<br />
<p align="center">
  <h3 align="center"><a href="https://github.com/learnwithsumit/think-in-a-react-way">Lesson 3 - Think in a React way Tutorial Series [ in Bangla ]</a></h3>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [How to run](#how-to-run)
- [Editor Setup](#editor-setup)
  - [Plugins](#plugins)
  - [Settings](#settings)
- [Linting Setup](#linting-setup)
  - [Install Dev Dependencies](#install-dev-dependencies)
  - [Create Linting Configuration file manually](#create-linting-configuration-file-manually)
- [Contact](#contact)

<!-- HOW TO RUN -->

## How to run

Please follow the below instructions to run this project in your computer:

1. Clone this repository
   ```sh
   git clone https://github.com/learnwithsumit/think-in-a-react-way.git
   ```
2. Checkout to branch "lesson-3"
   ```sh
   git checkout lesson-3
   ```
3. Run
   ```sh
   yarn
   ```
4. Your app should be available in http://localhost:5500

<!-- Editor Setup -->

## Editor Setup

You can use any editor but as I personally prefer VS Code. I will give some instructions about how I prefer VS code to be setup for React applications.

### Plugins

You need to install the below plugins:

- ESLint by Dirk Baeumer
- Prettier - Code formatter by Prettier
- Dracula Official Theme (optional)

### Settings

Follow the below settings for VS Code -

1. Create a new folder called ".vscode" inside the project root folder
2. Create a new file called "settings.json" inside that folder.
3. Paste the below json in the newly created settings.json file and save the file.

```json
{
  // Theme
  "workbench.colorTheme": "Dracula",

  // config related to code formatting
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  "javascript.validate.enable": false, //disable all built-in syntax checking
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.tslint": true,
    "source.organizeImports": true
  },
  "eslint.alwaysShowStatus": true,
  "prettier.disableLanguages": ["javascript", "javascriptreact"],
  // emmet
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

If you followed all previous steps, the theme should change and your editor should be ready.

## Linting Setup

In order to lint and format your React project automatically according to popular airbnb style guide, I recommend you to follow the instructions below.

### Install Dev Dependencies

```sh
yarn add -D prettier
yarn add -D babel-eslint
npx install-peerdeps --dev eslint-config-airbnb
yarn add -D eslint-config-prettier eslint-plugin-prettier
```

or You can also add a new script in the scripts section like below to install everything with a single command:

```json
scripts: {
    "lint": "yarn add -D prettier && yarn add -D babel-eslint && npx install-peerdeps --dev eslint-config-airbnb && yarn add -D eslint-config-prettier eslint-plugin-prettier"
}
```

and then simply run the below command in the terminal -

```sh
yarn lint #or 'npm run lint'
```

### Create Linting Configuration file manually

Create a `.eslintrc` file in the project root and enter the below contents:

```json
{
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "prettier",
    "prettier/react",
    "plugin:jsx-a11y/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "rules": {
    "react/react-in-jsx-scope": 0,
    "react-hooks/rules-of-hooks": "error",
    "no-console": 0,
    "react/state-in-constructor": 0,
    "indent": 0,
    "linebreak-style": 0,
    "react/prop-types": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 4,
        "semi": true
      }
    ]
  },
  "plugins": ["prettier", "react", "react-hooks"]
}
```

<!-- CONTACT -->

## Contact

Sumit Saha - [sumit@learnwithsumit.com](mailto:sumit@learnwithsumit.com)

Project Link: [https://github.com/learnwithsumit/think-in-a-react-way](https://github.com/learnwithsumit/think-in-a-react-way)

Youtube Playlist Link: [https://www.youtube.com/playlist?list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr](https://www.youtube.com/playlist?list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr)

Youtube Channel: [https://youtube.com/LearnwithSumit](https://youtube.com/LearnwithSumit)

<!-- MARKDOWN LINKS & IMAGES -->

[youtube-shield]: https://img.shields.io/badge/-Youtube-black.svg?style=flat-square&logo=youtube&color=555&logoColor=white
[youtube-url]: https://youtube.com/LearnwithSumit
[facebook-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=flat-square&logo=facebook&color=555&logoColor=white
[facebook-url]: https://facebook.com/letslearnwithsumit
[facebook-group-url]: https://facebook.com/groups/learnwithsumit
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&color=555&logoColor=white
[instagram-url]: https://instagram.com/learnwithsumit
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/company/learnwithsumit
