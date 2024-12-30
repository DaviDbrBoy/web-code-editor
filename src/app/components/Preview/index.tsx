'use client'

import { EditorState } from "@/app/types/editor";
import { PreviewFrame } from "./preview-frame";
import { PreviewHeader } from "./preview-header";

export function Preview(props: EditorState) {
    return (
      <div className="h-full flex flex-col bg-zinc-900">
        <PreviewHeader />

        <div className="flex-1 relative">
            <PreviewFrame {...props} />
        </div>
      </div>
    );
  }
