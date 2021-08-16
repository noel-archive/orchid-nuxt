# @augu/orchid-nuxt

> 🛬📗 **Adds support for [@augu/orchid](https://orchid.floofy.dev) with Nuxt.js**

## Usage

> `nuxt.config.js`

```js
export default {
  modules: ['@augu/orchid-nuxt'],
  options: {
    orchid: {
      middleware: [your, middleware, here],
      defaults: {},
    },
  },
};
```

You will now be exposed with `nuxt.$orchid` global, which will return the [http client](https://orchid.floofy.dev/classes/httpclient.html) instance.

## License

**@augu/orchid-nuxt** is released under **MIT** License by Noelware.
