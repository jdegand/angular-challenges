# Pipe Observable to Signal

> author: thomas-laforge

### Run Application

```bash
npx nx serve signal-pipe-observable-to-signal
```

### Documentation and Instruction

Challenge documentation is [here](https://angular-challenges.vercel.app/challenges/signal/54-pipe-observable-to-signal/).

### Notes

- Pipes can replaced with computed.
- OnPush is used.
- Replace BehaviorSubject with a signal.
- Signal Input Setter is poorly documented. Might not need at all and replace with a computed signal?
- Remove async and currency pipes.
- `displayedColumns` convert to signal?
- `products = products` could be looked at as mocking an API request. Can't move that data to the service class.
- Might need effect and constructor inside currency service.
- `ProductInfo` -> signal input?
- Don't need to touch `product.model` file

### Useful Resources

- [Blog](https://medium.com/@s.shashinda1998.2/angular-signals-vs-rxjs-behavioral-subjects-c8e08dfd0af1)
- [Medium](https://netbasal.com/converting-observables-to-signals-in-angular-what-you-need-to-know-4f5474c765a0)
- [Blog](https://dev.to/this-is-angular/be-ready-for-input-signals-in-angular-3djf)
