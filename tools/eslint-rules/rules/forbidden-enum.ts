/**
 * This file sets you up with structure needed for an ESLint rule.
 *
 * It leverages utilities from @typescript-eslint to allow TypeScript to
 * provide autocompletions etc for the configuration.
 *
 * Your rule's custom logic will live within the create() method below
 * and you can learn more about writing ESLint rules on the official guide:
 *
 * https://eslint.org/docs/developer-guide/working-with-rules
 *
 * You can also view many examples of existing rules here:
 *
 * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/rules
 */

import { ESLintUtils, TSESLint, TSESTree } from '@typescript-eslint/utils';

// NOTE: The rule will be available in ESLint configs as "@nx/workspace/forbidden-enum"
export const RULE_NAME = 'forbidden-enum';

export const rule = ESLintUtils.RuleCreator(() => __filename)({
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow enums',
    },
    hasSuggestions: true,
    messages: {
      enum: 'You have used an enum.',
      enumSuggestion: 'Convert to a union type',
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    function TSEnumDeclaration(node: TSESTree.TSEnumDeclaration): void {
      const enumMembers = node.members;

      const enumToString = node.members.toString();
      const union = enumToString.replace(',', '|');

      if (enumMembers.length > 0) {
        context.report({
          node: node,
          messageId: 'enum',
          data: {
            enumMembers,
          },
          suggest: [
            {
              messageId: 'enumSuggestion',
              data: { enumMembers },
              fix: (fixer): TSESLint.RuleFix => {
                return fixer.replaceText(node, union);
              },
            },
          ],
        });
      }
    }

    return {
      TSEnumDeclaration,
    };
  },
});
