interface CodeBlockProps {
  children: string;
  language?: string;
}

export function CodeBlock({ children, language = "bash" }: CodeBlockProps) {
  return (
    <pre className="my-4 overflow-x-auto rounded-xl border border-border bg-zinc-950 p-4 text-sm">
      <code className={`language-${language} text-emerald-400/90`}>
        {children}
      </code>
    </pre>
  );
}
