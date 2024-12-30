'use client';

import { Layout } from 'lucide-react';

export function PreviewHeader() {
  return (
    <div className="border-b border-border h-16 flex justify-center items-center gap-2 text-white">
      <Layout size={24} />
      <span className="text-lg font-medium">Preview</span>
    </div>
  );
}