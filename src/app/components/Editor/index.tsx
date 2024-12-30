import { Language } from "@/app/types/editor";
import { Editor as MonacoEditor } from "@monaco-editor/react";

interface EditorProps {
  language: Language
  value: string
  onChange: (value: string) => void
}

export function Editor({ language, value, onChange }: EditorProps) {
    return <MonacoEditor
    height="100%"
    defaultLanguage={language}
    value={value}
    onChange={(value) => onChange(value || '')}
    theme="vs-dark"
    options={{
      minimap: { enabled: false },
      fontSize: 14,
      wordWrap: 'on',
      scrollBeyondLastLine: false,
      automaticLayout: true,
    }}
  />
}
