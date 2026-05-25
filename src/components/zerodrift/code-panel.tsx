type CodePanelProps = Readonly<{
  title: string;
  children: string;
}>;

export function CodePanel({ title, children }: CodePanelProps) {
  return (
    <div>
      <p className="mb-2 text-[13px] text-[#6c7078]">{title}</p>
      <pre className="overflow-x-auto rounded-[8px] bg-[#181a1e] p-6 font-mono text-[13px] leading-[1.5] text-[#78e08f]">
        {children}
      </pre>
    </div>
  );
}
