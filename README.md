# deeplink.js

Redirect mobile website users to your native iOS and Android (browser only)

# Use

```js
<script src="./deeplink.js"></script>
<script>
  deeplink.launchiOS({
    storeLink: "https://itunes.apple.com/jp/app/twitter/id333903271?mt=8",
    urlScheme: "twitter://timeline"
  });
</script>
```

> Use twitter app to sample.

# Install

```
npm install deeplink.js
or
bower install deeplink.js
```

# Build

```sh
$ make build # output: sua.min.js
```



## LICENSE

@see : [LICENSE](https://github.com/fkei/deeplink.js/blob/master/LICENSE)
