interface SectionLabelProps {
  text: string;
}

export function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="h-[2px] w-10 bg-[#00d4ff]" />
      <span className="text-xs font-bold uppercase tracking-widest text-[rgba(255,255,255,0.4)]">
        {text}
      </span>
    </div>
  );
}