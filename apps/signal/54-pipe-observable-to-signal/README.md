# Pipe Observable to Signal

> author: thomas-laforge

### Run Application

```bash
npx nx serve signal-pipe-observable-to-signal
```

### Documentation and Instruction

Challenge documentation is [here](https://angular-challenges.vercel.app/challenges/signal/54-pipe-observable-to-signal/).

### Notes

- Pipe can replaced with computed.
- OnPush is used.
- Replace BehaviorSubject with a signal.
- Signal Input Setter is poorly documented. Might not need at all and replace with a computed signal.
- Remove async pipes.
- `displayedColumns` convert to signal?
- `products = products` could be looked at as mocking an API request. Can't move that data to the service class.
- CurrencyPipe can be converted to a computed signal.
- Might need effect and constructor inside currency service.

### Useful Resources

- [Blog](https://medium.com/@s.shashinda1998.2/angular-signals-vs-rxjs-behavioral-subjects-c8e08dfd0af1)
