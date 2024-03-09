# Decoupling Components

> author: thomas-laforge

### Run Application

```bash
npx nx serve angular-decoupling
```

### Documentation and Instruction

Challenge documentation is [here](https://angular-challenges.vercel.app/challenges/angular/33-decoupling/).

## Thoughts

- Since this is inspired by the Spartan Project - I started digging into some components to see how they do it. I looked at the [accordion component](https://github.com/goetzrobin/spartan/blob/main/libs/ui/accordion/brain/src/lib/brn-accordion-content.component.ts) and noticed the forwardRef call.
- [forwardRef](https://angular.io/api/core/forwardRef) allows references to placeholders that don't yet exist. But you have to give a returnType to the ref.
- In regards to this challenge, you are still basically injecting the service in the directive just that the code really doesn't reference that service but a generic injector that you fill in later with another inject call.
- I'm guessing that the brain is injected into the helmet.
- If the state of button-disabled.directive is a signal, can't you just inject the signal? I know signals always update with value changes.
