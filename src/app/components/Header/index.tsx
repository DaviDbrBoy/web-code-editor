'use client';

import { Code2 } from "lucide-react";
import { DownloadButton } from "./download-button";
import { EditorState } from "@/app/types/editor";

interface HeaderProps {
  editorState: EditorState;
}


export function Header({ editorState }: HeaderProps) {
    return (
        <header className="text-white border-b border-border py-4 px-10 flex items-center justify-between bg-zinc-900">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6" />
            <h1 className="text-xl font-bold">Davis Code Editor</h1>
          </div>
          <div className="flex items-center gap-4">
            <DownloadButton editorState={editorState}/>
          </div>
        </header>
      );
}