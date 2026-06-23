import type { ReactNode } from "react";

interface ProjectPlaceholderProps {
  title: string;
  gradient: string;
  index: number;
}

export function ProjectPlaceholder({ title, gradient, index }: ProjectPlaceholderProps) {
  const variant = index % 3;

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ background: gradient }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-foreground/[0.04]" />
      <div className="relative h-full w-full flex items-center justify-center p-4">
        {variant === 0 && <LaptopMockup title={title} />}
        {variant === 1 && <TabletMockup title={title} />}
        {variant === 2 && <PhoneMockup title={title} />}
      </div>
    </div>
  );
}

function WindowDots() {
  return (
    <div className="flex items-center gap-1">
      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
    </div>
  );
}

function Line({ width, opacity = 10 }: { width: string; opacity?: number }) {
  return (
    <div
      className="h-1.5 rounded-full bg-primary-foreground"
      style={{ width, opacity: opacity / 100 }}
    />
  );
}

function DeviceShell({
  children,
  className,
  frameClassName,
  base,
}: {
  children: ReactNode;
  className?: string;
  frameClassName?: string;
  base?: ReactNode;
}) {
  return (
    <div className={["relative flex flex-col items-center", className].join(" ")}>
      <div
        className={[
          "relative w-full h-full bg-card border border-border/60 shadow-2xl overflow-hidden",
          frameClassName,
        ].join(" ")}
      >
        <div className="relative h-full w-full bg-foreground rounded-[inherit] overflow-hidden flex flex-col">
          {children}
        </div>
      </div>
      {base}
    </div>
  );
}

function Header({ title }: { title: string }) {
  return (
    <div className="px-3 py-2 border-b border-primary-foreground/10 flex items-center justify-between gap-2 bg-foreground shrink-0">
      <WindowDots />
      <span className="text-[8px] font-bold text-primary-foreground truncate leading-none max-w-[60%]">
        {title}
      </span>
    </div>
  );
}

function LaptopMockup({ title }: { title: string }) {
  return (
    <DeviceShell
      className="w-[92%] h-[72%] rounded-lg"
      base={
        <div className="w-[96%] h-2 bg-card rounded-b-md border-x border-b border-border/60 shadow-lg -mt-0.5" />
      }
    >
      <Header title={title} />
      <div className="p-3 flex-1 flex flex-col gap-2 overflow-hidden">
        <div className="flex gap-2 shrink-0">
          <div className="h-10 flex-1 rounded-lg bg-primary/20" />
          <div className="h-10 flex-1 rounded-lg bg-accent/20" />
          <div className="h-10 w-10 rounded-full bg-secondary/70" />
        </div>
        <div className="grid grid-cols-5 gap-2 flex-1 min-h-0">
          <div className="col-span-3 rounded-xl bg-primary/10 p-2 flex flex-col justify-between">
            <div className="h-2 w-12 rounded-full bg-primary/40" />
            <div className="flex items-end gap-1 h-10">
              <div className="w-1/5 h-[40%] rounded-t bg-primary/30" />
              <div className="w-1/5 h-[70%] rounded-t bg-primary/40" />
              <div className="w-1/5 h-[55%] rounded-t bg-primary/30" />
              <div className="w-1/5 h-[85%] rounded-t bg-primary/50" />
              <div className="w-1/5 h-[60%] rounded-t bg-primary/30" />
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-2 min-h-0">
            <div className="rounded-lg bg-accent/15 p-2 flex flex-col justify-between gap-2 flex-1">
              <div className="h-6 w-6 rounded-full bg-accent/30" />
              <div className="space-y-1">
                <Line width="66%" />
                <Line width="45%" />
              </div>
            </div>
            <div className="rounded-lg bg-primary/15 p-2 flex flex-col justify-between gap-2 flex-1">
              <div className="h-6 w-6 rounded-full bg-primary/30" />
              <div className="space-y-1">
                <Line width="66%" />
                <Line width="45%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DeviceShell>
  );
}

function TabletMockup({ title }: { title: string }) {
  return (
    <DeviceShell
      className="w-[72%] h-[88%] rounded-[1.1rem]"
      frameClassName="border-4 border-card"
    >
      <Header title={title} />
      <div className="p-3 flex-1 flex flex-col gap-2 overflow-hidden">
        <div className="h-14 rounded-xl bg-primary/15 flex items-center px-3 gap-3 shrink-0">
          <div className="h-8 w-8 rounded-full bg-accent/30" />
          <div className="flex-1 space-y-1">
            <Line width="75%" />
            <Line width="50%" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
          <div className="rounded-xl bg-accent/15 p-2 flex flex-col gap-2">
            <div className="h-2 w-8 rounded-full bg-accent/40" />
            <div className="flex-1 rounded-lg bg-primary-foreground/5" />
          </div>
          <div className="rounded-xl bg-primary/15 p-2 flex flex-col gap-2">
            <div className="h-2 w-8 rounded-full bg-primary/40" />
            <div className="flex-1 rounded-lg bg-primary-foreground/5" />
          </div>
          <div className="col-span-2 rounded-xl bg-secondary/50 p-2 flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-accent/30" />
            <div className="flex-1 space-y-1">
              <Line width="66%" />
              <Line width="33%" />
            </div>
          </div>
        </div>
      </div>
    </DeviceShell>
  );
}

function PhoneMockup({ title }: { title: string }) {
  return (
    <DeviceShell
      className="w-[42%] h-[88%] rounded-[1.5rem]"
      frameClassName="border-[3px] border-card"
    >
      <div className="flex items-center justify-center py-1.5 border-b border-primary-foreground/10 bg-foreground shrink-0">
        <div className="w-7 h-1 rounded-full bg-primary-foreground/20" />
      </div>
      <div className="p-2.5 flex-1 flex flex-col gap-2 overflow-hidden">
        <div className="flex items-center justify-between gap-1 shrink-0">
          <div className="h-5 w-5 rounded-full bg-primary/30" />
          <span className="text-[7px] font-bold text-primary-foreground truncate leading-none">
            {title}
          </span>
        </div>
        <div className="h-14 rounded-xl bg-primary/15 p-2 space-y-1 shrink-0">
          <div className="h-1.5 w-10 rounded-full bg-primary/40" />
          <Line width="100%" />
          <Line width="75%" />
        </div>
        <div className="space-y-1.5 flex-1 min-h-0">
          <div className="h-8 rounded-lg bg-primary-foreground/5 p-1.5 flex items-center gap-1.5">
            <div className="h-4 w-4 rounded-full bg-accent/30" />
            <Line width="70%" opacity={15} />
          </div>
          <div className="h-8 rounded-lg bg-primary-foreground/5 p-1.5 flex items-center gap-1.5">
            <div className="h-4 w-4 rounded-full bg-primary/30" />
            <Line width="70%" opacity={15} />
          </div>
          <div className="h-8 rounded-lg bg-primary-foreground/5 p-1.5 flex items-center gap-1.5">
            <div className="h-4 w-4 rounded-full bg-secondary/60" />
            <Line width="70%" opacity={15} />
          </div>
        </div>
        <div className="mt-auto flex justify-end shrink-0">
          <div className="h-6 w-14 rounded-full bg-primary" />
        </div>
      </div>
    </DeviceShell>
  );
}
