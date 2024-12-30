interface PreviewContent {
  html: string;
  css: string;
  js: string;
}
  
export function createPreviewContent({ html, css, js }: PreviewContent): string {
  return `
    <!DOCTYPE html>
    <html class="dark">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { 
            background-color: #18181B; 
            color: #fff; 
            margin: 0;
            padding: 16px;
            font-family: system-ui, -apple-system, sans-serif;
          }
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `;
}