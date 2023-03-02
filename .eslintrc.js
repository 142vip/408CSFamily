module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'no-unused-vars': 0,
    'arrow-spacing': [2, {
      before: true,
      after: true
    }], // 箭头函数中的箭头前后加空格
    'block-spacing': [2, 'always'], // 花括号内前后加空格
    'brace-style': [2, '1tbs', {
      allowSingleLine: true
    }], // 允许单行方法
    'comma-dangle': [2, 'never'], // 在对象、数组文字中不使用尾随逗号
    'comma-spacing': [2, {
      before: false,
      after: true
    }], // 逗号后空格
    'comma-style': [2, 'last'], // 对象、数组元素同一行后面加逗号
    'constructor-super': 2, // 派生类的构造函数必须调用super()
    curly: [2, 'multi-line'], // 方法体多行不允许省略花括号
    'dot-location': [2, 'property'], // 点与属性在同一行
    'eol-last': 2, // 在非空文件的末尾强制使用至少一个换行符
    'generator-star-spacing': [2, {
      before: true,
      after: true
    }], // 生成器函数前后加空格
    'handle-callback-err': [2, '^(err|error)$'], // err的错误回调必须处理
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true
    }], // 对象字面亮键和冒号之间存在空格
    'keyword-spacing': [2, {
      before: true,
      after: true
    }],
    'new-cap': [2, {
      newIsCap: true,
      capIsNew: false
    }], // 构造函数首字母大写
    'no-class-assign': 2, // 禁止修改类申明的变量
    'no-cond-assign': 2, // 禁止条件表达式中出现赋值操作符
    'no-const-assign': 2, // 禁止修改 const 声明的变量
    'no-delete-var': 2, // 禁止删除变量
    'no-dupe-args': 2, // 禁止 function 定义中出现重名参数
    'no-dupe-class-members': 2, // 禁止类成员中出现重复的名称
    'no-dupe-keys': 2, // 禁止对象字面量中出现重复的 key
    'no-duplicate-case': 2, // 禁止出现重复的 case 标签
    'no-empty-character-class': 2, // 禁止在正则表达式中使用空字符集
    'no-empty-pattern': 2, // 禁止使用空解构模式
    'no-eval': 2, // 禁用 eval()
    'no-ex-assign': 2, // 禁止对 catch 子句的参数重新赋值
    'no-extend-native': 2, // 禁止扩展原生类型
    'no-extra-bind': 2, // 禁止不必要的函数绑定
    'no-extra-boolean-cast': 2, // 禁止不必要的布尔转换
    'no-extra-parens': [2, 'functions'], // 禁止不必要的括号
    'no-fallthrough': 2, // 禁止 case 语句落空
    'no-func-assign': 2, // 禁止对 function 声明重新赋值
    'no-implied-eval': 2, // 禁止使用类似 eval() 的方法
    'no-inner-declarations': [2, 'functions'], // 禁止在嵌套的块中出现function 声明
    'no-invalid-regexp': 2, // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-irregular-whitespace': 2, // 禁止不规则的空白
    'no-iterator': 2, // 禁用 __iterator__ 属性
    'no-label-var': 2, // 不允许标签与变量同名
    'no-labels': [2, {
      allowLoop: false,
      allowSwitch: false
    }], // 禁用标签语句
    'no-lone-blocks': 2, // 禁用不必要的嵌套块
    'no-multi-spaces': 2, // 禁止使用多个空格
    'no-multi-str': 2, // 禁止使用多行字符串
    'no-multiple-empty-lines': [2, {
      max: 2
    }], // 禁止出现多行空行
    'no-global-assign': 2, // 禁止对原生对象或只读的全局对象进行赋值
    'no-unsafe-negation': 2, // 禁止对关系运算符的左操作数使用否定操作符
    'no-new-object': 2, // 禁用 Object 的构造函数
    'no-new-require': 2, // 禁止调用 require 时使用 new 操作符
    'no-new-wrappers': 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-obj-calls': 2, // 禁止把全局对象作为函数调用
    'no-octal': 2, // 禁用八进制字面量
    'no-octal-escape': 2, // 禁止在字符串中使用八进制转义序列
    'no-path-concat': 2, // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-proto': 2, // 禁用 __proto__ 属性
    'no-redeclare': 2, // 禁止多次声明同一变量
    'no-regex-spaces': 2, // 禁止正则表达式字面量中出现多个空格
    'no-return-assign': [2, 'except-parens'], // 禁止在 return 语句中使用赋值语句
    'no-self-assign': 2, // 禁止自我赋值,禁止自身比较
    'no-sequences': 2, // 禁用逗号操作符
    'no-shadow-restricted-names': 2, // 禁止将标识符定义为受限的名字
    'func-call-spacing': 2, // 要求或禁止在函数标识符和其调用之间有空格
    'no-sparse-arrays': 2, // 禁用稀疏数组
    'no-this-before-super': 2, // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-trailing-spaces': 2, // 禁用行尾空格
    'no-undef-init': 2, // 禁止将变量初始化为 undefined
    'no-unexpected-multiline': 2, // 禁止出现令人困惑的多行表达式
    'no-unmodified-loop-condition': 2, // 禁用一成不变的循环条件
    'no-unneeded-ternary': [2, {
      defaultAssignment: false
    }], // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unreachable': 2, // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unsafe-finally': 2, // 禁止在 finally 语句块中出现控制流语句
    'no-useless-call': 2, // 禁止不必要的 .call() 和 .apply()
    'no-useless-computed-key': 2, // 禁止在对象中使用不必要计算属性
    'no-useless-constructor': 2, // 禁用不必要的构造函数
    'no-useless-escape': 0, // 禁用不必要的转义字符
    'no-whitespace-before-property': 2, // 禁止属性前有空白
    'no-with': 2, // 禁用 with 语句
    'one-var': [2, {
      initialized: 'never'
    }], // 强制函数中的变量要么一起声明要么分开声明
    'operator-linebreak': [2, 'after', {
      overrides: {
        '?': 'before',
        ':': 'before'
      }
    }], // 强制操作符使用一致的换行符
    'padded-blocks': [2, 'never'], // 要求或禁止块内填充
    quotes: [2, 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }], // 强制使用一致的反勾号、双引号或单引号
    'semi-spacing': [2, {
      before: false,
      after: true
    }], // 强制在块之前使用一致的空格
    'space-before-blocks': [2, 'always'], // 强制在块之前使用一致的空格
    'space-before-function-paren': [2, 'never'], // 强制在 function的左括号之前使用一致的空格
    'space-in-parens': [2, 'never'], // 强制在圆括号内使用一致的空格
    'space-infix-ops': 2, // 要求操作符周围有空格
    'space-unary-ops': [2, {
      words: true,
      nonwords: false
    }], // 强制在一元操作符前后使用一致的空格
    'template-curly-spacing': [2, 'never'], // 禁止模板字符串中的嵌入表达式周围空格的使用
    'use-isnan': 2, // 要求使用 isNaN() 检查 NaN
    'valid-typeof': 2, // 强制 typeof 表达式与有效的字符串进行比较
    'wrap-iife': [2, 'any'], // 要求 IIFE(立即执行函数) 使用括号括起来
    'prefer-const': 2, // 要求使用 const 声明那些声明后不再被修改的变量
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }], // 强制在大括号中使用一致的空格
    'array-bracket-spacing': [2, 'never'], // 强制数组方括号中使用一致的空格

    /* 非强制 */
    camelcase: [0, {
      properties: 'always'
    }], // 对属性名称强制使用驼峰样式
    'no-array-constructor': 2, // 禁止使用 Array 构造函数创建数组
    'no-caller': 2, // 禁止使用 arguments.caller 和 arguments.callee
    'no-console': 'off', // 禁用console
    'no-control-regex': 0// 禁止在正则表达式中使用控制字符
  }
}
