import { EditorState, } from '../types/editor';


export function downloadCode(editorState: EditorState) {
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>${editorState.css}</style>
</head>
<body>
  ${editorState.html}
  <script>${editorState.js}</script>
</body>
</html>`;

  downloadFile('index.html', htmlContent, 'text/html');
  
  if (editorState.css) {
    downloadFile('styles.css', editorState.css, 'text/css');
  }
  
  if (editorState.js) {
    downloadFile('script.js', editorState.js, 'text/javascript');
  }
}

function downloadFile(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}