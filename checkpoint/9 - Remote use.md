## Remote use

Checkpoint can be used remotely from other scripts or CEP panels by other developers through use of `CSEvents` or the `PlugPlug` external library in JSX. The following events are supported:

### Examples in Javascript / CEP

```js
const CSI = new CSInterface();

// Triggering the panel to run on current settings

// Listening to output events
CSInterface.addEventListener("com.checkpoint.cep.completed", (evt) => {
  console.log(
    "Checkpoint finished running with the following settings payload:"
  );
  console.log(evt);
});
```

### Example in Adobe Scripting / JSX

```js

```

### Input events

### Output events
