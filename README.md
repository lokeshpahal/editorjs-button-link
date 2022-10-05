# Set Link and Text and Generate button plugin for Editor.js

## How to use

1. Install

```js
yarn add @lokeshpahal/editorjs-button-link
```

2. Connect

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
tools: {
        ButtonLink: {
          class: ButtonLink,
          inlineToolbar: false,
          config:{
            css:{
              "btnColor": "btn--gray",
            }
          }
        },
      },
      i18n: {
        messages: {
          tools: {
            "ButtonLink": {
              'Button Text': 'My Button',
              'Link Url': 'https://lokeshpahal.com',
              'Set': "To set",
              'Default Button': "Default",
            }
          }
        },
      },
}
```

## Config Params

`i18n` overwrite if want to change default placeholder text,

```
i18n: {
    messages: {
      tools: {s
        "ButtonLink": {
          'Button Text': 'My Button',
          'Link Url': 'https://lokeshpahal.com',
          'Set': "To set",
          'Default Button': "Default",
        }
      }
    },
},
```

if customize css, input filed, button design, and etc...

```
config:{
    css:{
      "btnColor": "btn--gray",
    }
}
```

## Output data

| Field  | Type     | Description      |
| ------ | -------- | ---------------- |
| link   | `string` | Exclusion HTML Tag text |
| text   | `string` | Exclusion HTML Tag text |


```json
{
            "type" : "ButtonLink",
            "data" : {
                "link" : "https://editorjs.io/",
                "text" : "editorjs official"
            }
        }
```
