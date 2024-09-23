const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/react",
    "plugin:tailwindcss/recommended", // Tailwind CSS 규칙 추가
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
      node: {
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
      },
    },
    tailwindcss: {
      config: "./tailwind.config.js", // Tailwind 설정 파일 경로
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js", "**/*.css"],
  rules: {
    "import/no-default-export": "off",
    "react/jsx-props-no-spreading": "off", // props spreading 허용
    "react/require-default-props": "off", // optional props에 대한 기본값 요구 해제
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // 사용하지 않는 변수 체크, _ 시작하는 변수 무시
    "tailwindcss/no-custom-classname": "warn", // 커스텀 클래스 사용 시 경고
    "tailwindcss/enforces-negative-arbitrary-values": "warn", // 음수 값 사용 시 경고
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ], // 함수형 컴포넌트 정의 스타일 통일
  },
  overrides: [
    {
      files: ["*.config.js", "*.config.ts"],
      env: {
        node: true,
      },
    },
  ],
};
