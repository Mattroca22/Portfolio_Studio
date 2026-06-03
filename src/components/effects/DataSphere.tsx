"use client";

export function DataSphere() {
  return (
    <div className="w-full h-[500px] flex items-center justify-center">
      <div className="relative w-80 h-80">
        <div className="absolute inset-0 rounded-full border border-[#00d4ff]/20 animate-pulse" />
        <div className="absolute inset-4 rounded-full border border-[#8b5cf6]/20 animate-pulse delay-75" />
        <div className="absolute inset-8 rounded-full border border-[#00d4ff]/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00d4ff]/30 to-[#8b5cf6]/30 flex items-center justify-center">
            <span className="text-4xl">🎯</span>
          </div>
        </div>
      </div>
    </div>
  );
}