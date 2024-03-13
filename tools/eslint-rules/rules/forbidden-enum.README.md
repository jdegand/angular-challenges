# Custom Eslint Rule

> author: thomas-laforge

### Run Application

```bash
npx nx serve eslint-rules
```

### Documentation and Instruction

Challenge documentation is [here](https://angular-challenges.vercel.app/challenges/nx/27-forbid-enum-rule/).

## Thoughts

- Is the bash command really necessary?
- Enums won't be disallowed and numerous [proposals](https://github.com/typescript-eslint/typescript-eslint/issues/8430) have been shot down. Enums are subjective and only numeric enums are problematic.
- There is a proposal to add enums to base JavaScript.
- Using `no-restricted-syntax` seems to be the correct way to implement a rule prohibiting enums. Initially, I tried to refactor the `prefer enum initializers` code and make this more complicated than necessary.

## Useful Resources

- [Eslint](https://eslint.org/docs/latest/extend/custom-rule-tutorial) - custom rule tutorial
- [Typescript eslint](https://typescript-eslint.io/rules/space-infix-ops/) - space infix ops
- [Github](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-enum-initializers.ts) - prefer enum initializers
- [YouTube](https://www.youtube.com/watch?v=YWzkvybIuLQ) - The Power of Custom ESLint: Boost Your Code Quality | Custom Eslint rule | Web dev | Javascript
- [Github](https://github.com/typescript-eslint/typescript-eslint/issues/8430) - Rule proposal: Disallow enums #8430
- [No restricted syntax](https://eslint.org/docs/latest/rules/no-restricted-syntax) - no restricted syntax
- [Typescript eslint](https://typescript-eslint.io/troubleshooting/#how-can-i-ban-specific-language-feature) - how can i ban specific language feature
