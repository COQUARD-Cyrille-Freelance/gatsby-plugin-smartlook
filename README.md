# gatsby-plugin-smartlook

Easily add Smartlook Analytics to your Gatsby site.

## Install

`yarn add gatsby-plugin-smartlook`

or

`npm i gatsby-plugin-smartlook --save`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-smartlook`,
    options: {
      includeInDevelopment: true, // optional parameter to include script in development
      id: YOUR_SMARTLOOK_ID,
    },
  },
];
```

To find your Smartlook ID, go on your dashboard and look at the last line from the snippet of code given:

```javascript
<script type='text/javascript'>
  window.smartlook||(function(d) {
    var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
    var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
    c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
    })(document);
    smartlook('init', '[your smartlook id]');
</script>```