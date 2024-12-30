'use client';

import { useEffect, useRef, memo } from 'react';
import { EditorState } from '@/app/types/editor';
import { createPreviewContent } from './preview-utils';

function PreviewFrameComponent({ html, css, js }: EditorState) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    const document = iframeRef.current.contentDocument;
    if (!document) return;

    const content = createPreviewContent({ html, css, js });
    document.open();
    document.write(content);
    document.close();
  }, [html, css, js]);

  return (
    <div className="absolute inset-0">
      <iframe
        ref={iframeRef}
        title="preview"
        className="w-full h-full bg-zinc-900 border-none"
      />
    </div>
  );
}

export const PreviewFrame = memo(PreviewFrameComponent);