'use client'

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Header } from "./components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";
import { useState } from "react";

export default function Home() {
  const [editorState, setEditorState] = useState({
    html: '<h1>Hello World</h1>\n<p>Start coding here!</p>',
    css: 'h1 {\n  color: #fff;\n}\n\np {\n  color: #888;\n}',
    js: 'console.log("Hello from JavaScript!");',
  });

  return (
    <div className="h-screen bg-zinc-900 flex flex-col">
      <Header editorState={editorState}/>

      <ResizablePanelGroup direction="horizontal" className="flex-1">
        <ResizablePanel defaultSize={50}>
        <Tabs defaultValue="html" className="h-full flex flex-col ">
            <div className="w-full flex justify-center h-16 items-center border-b border-border">
              <TabsList className="bg-background">
                <TabsTrigger value="html">HTML</TabsTrigger>
                <TabsTrigger value="css">CSS</TabsTrigger>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="html" className="flex-1">
              <Editor
                language="html"
                value={editorState.html}
                onChange={(value) => setEditorState({ ...editorState, html: value })}
              />
            </TabsContent>
            <TabsContent value="css" className="flex-1">
              <Editor
                language="css"
                value={editorState.css}
                onChange={(value) => setEditorState({ ...editorState, css: value })}
              />
            </TabsContent>
            <TabsContent value="javascript" className="flex-1">
              <Editor
                language="javascript"
                value={editorState.js}
                onChange={(value) => setEditorState({ ...editorState, js: value })}
              />
            </TabsContent>
          </Tabs>
        </ResizablePanel>

        <ResizableHandle className="bg-border" />

        <ResizablePanel defaultSize={50}>
          <Preview {...editorState}/>
        </ResizablePanel>

      </ResizablePanelGroup>
    </div>
  );
}
