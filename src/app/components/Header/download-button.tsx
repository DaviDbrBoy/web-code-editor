'use client'

import { downloadCode } from "@/app/lib/downloadcode";
import { EditorState } from "@/app/types/editor";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  editorState: EditorState;
}

export function DownloadButton({ editorState }: DownloadButtonProps) {
    return (
        <Button variant='secondary' className="gap-2" onClick={() => downloadCode(editorState)}>
            <Download size={16}/>
            Download Files
        </Button>
    );
  }