# react-hooks-tooltip

A Tooltip component made using React Hooks.

# Usage examples

```html
<Tooltip id="shippingInfo">
   <TooltipTrigger>
      <button>Hover me</button>
   </TooltipTrigger>
   <TooltipContent>
      <h1>Heading text</h1>
      <p>Lorem ipsum dolor sit amet feli elit.</p>
   </TooltipContent>
</Tooltip>
```

# Components API

### Tooltip

| Attribute | Type | Default | Required | Description
| ------ | ------ | ------ | ------ | ------ |
| `id` | `string`  | -     | yes  | This prop is used to help implement the accessibility logic |
| `children` | `React.ReactNode[]`  | -   | yes   | Should receive a button and a content as children |

### TooltipTrigger

| Attribute | Type | Default | Required | Description
| ------ | ------ | ------ | ------ | ------ |
| `as` | `ComponentType`  | `button`     | no  | Renders the tooltip button |
| `ref` | `Function or instanceOf Element`  | -     | no  | To access the trigger node element |
| `children` | `React.ReactNode`  | -   | yes   | Receives any type of children |

### TooltipContent

| Attribute | Type | Default | Required | Description
| ------ | ------ | ------ | ------ | ------ |
| `ref` | `Function or instanceOf Element`  | -     | no  | To access the content node element |
| `placement`  | `string`  | `top`   | no   | Defines how a tooltip content should be placed |
| `onDisplay` | `Function`  | -   | no   | Callback fired when the tooltip content is displayed |
| `onDismiss` | `Function`  | -   | no   | Callback fired when the tooltip content is dismissed |
| `children` | `React.ReactNode`  | -   | yes   | Receives any type of children |
