# promethean-plugin

test api plugin

## Install

```bash
npm install promethean-plugin
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`openMap(...)`](#openmap)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### openMap(...)

```typescript
openMap(options: OpenMapOptions) => Promise<OpenMapOptions>
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#openmapoptions">OpenMapOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#openmapoptions">OpenMapOptions</a>&gt;</code>

--------------------


### Interfaces


#### OpenMapOptions

| Prop            | Type                |
| --------------- | ------------------- |
| **`latitude`**  | <code>number</code> |
| **`longitude`** | <code>number</code> |

</docgen-api>
