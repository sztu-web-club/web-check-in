// @ts-check
import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-plugin'
import uni from '@uni-helper/eslint-config'

export default uni(
  {},
  antfu({
    typescript: {
      tsconfigPath: [
        'tsconfig.json',
        'tsconfig.node.json',
      ],
    },
  }, unocss.configs.flat, {
    rules: {
      'ts/no-unsafe-argument': 'off',
      'ts/no-unsafe-assignment': 'off',
      'ts/no-unsafe-member-access': 'off',
      'ts/no-unsafe-return': 'off',
      'ts/no-unsafe-call': 'off',
      'antfu/top-level-function': 'off',
      'no-console': 'warn',
    },
  }),
)
