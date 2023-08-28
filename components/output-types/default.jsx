import React from 'react'

export default ({
  children,
  contextPath,
  deployment,
  CssLinks,
  Fusion,
  Libs,
  MetaTags
}) => (
  <html>
    <head>
      <title>Fusion Article</title>
      <MetaTags />
      <Libs />
      <CssLinks />
      <meta name="color-scheme" content="dark light" />
      <link
        rel="icon"
        type="image/x-icon"
        href={deployment(`${contextPath}/resources/favicon.ico`)}
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <div id="fusion-app">{children}</div>
      <Fusion />
    </body>
  </html>
)
