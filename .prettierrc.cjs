module.exports = {
  // 缩进字节数
  tabWidth: 2,
  // 行尾需要有分号
  semi: true,
  // 超过最大值换行
  printWidth: 120,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 对象的 key 仅在必要时用引号
  quoteProps: "as-needed",
  // 不让 prettier 使用 eslint 的代码格式进行校验
  eslintIntegration: false,
  // 不让 prettier 使用 stylelint 的代码格式进行校验
  stylelintIntegration: false,
  // 不让 prettier 使用 tslint 的代码格式进行校验
  "prettier.tslintIntegration": false,
  // (x) => {} 箭头函数参数只有一个时，是否要有小括号。avoid：省略括号
  arrowParens: "avoid",
};
