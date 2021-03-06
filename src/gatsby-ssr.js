import React from 'react';

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  if (
    process.env.NODE_ENV === 'production' ||
    pluginOptions.includeInDevelopment
  ) {
    const { id } = pluginOptions;
    return setPostBodyComponents([
      <script
        key={`gatsby-plugin-smartlook-tracking`}
        dangerouslySetInnerHTML={{
          __html: `
                window.smartlook||(function(d) {
                var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
                var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
                c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
                })(document);
                smartlook('init', '${id}');
          `,
        }}
      />,
    ]);
  }

  return null;
};
