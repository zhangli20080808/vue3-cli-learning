#!/usr/bin/env node

/**
 * 常用的命令行交互形式
 * 难点？实现
 * https://www.npmjs.com/package/inquirer
 */
const inquirer = require('inquirer')
inquirer
  .prompt([
    /* Pass your questions in here */
    // {
    //   type: 'input',
    //   name: 'yourName',
    //   message: 'your name',
    //   default: 'noname',  // 默认值
    //   // choices
    //   validate: function (v) {
    //     return typeof v === 'string'
    //   },
    //   // 前置信息,补充信息，备注说明
    //   transformer: (v) => {
    //     return v + '(input your name)'
    //   },
    //   //  对结果做过滤
    //   filter: (v) => {
    //     return `name[${v}]`
    //   },
    // },
    // {
    //   type: 'confirm',
    //   name: 'choice',
    //   message: 'your choice',
    //   default: false
    // },
    // {
    //   type: 'number',
    //   name: 'num',
    //   message: 'your number'
    // },
    {
      type: 'checkbox',  // list rawlist checkbox
      name: 'choice2',
      message: 'your choice',
      default: 0,
      choices: [
        { value: 1, name: 'react' },
        { value: 2, name: 'vue' },
        { value: 3, name: 'js' }
      ]
    },
    // expand 简写选择
    {
      type: 'expand',
      name: 'choice3',
      message: 'your choice',
      default: 'red',
      choices: [
        { key: 'R', value: 'red' },
        { key: 'G', value: 'green' },
        { key: 'B', value: 'blue' }
      ]
    },
    // editor 输入一些复杂内容 input 承载不了的时候
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })
