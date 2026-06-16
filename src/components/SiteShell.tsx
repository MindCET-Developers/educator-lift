import { Link, Outlet } from "@tanstack/react-router";
import logo from "@/assets/Mindcet-logo.png.asset.json";

function Triangle({ className, color }: { className?: string; color: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <polygon points="50,5 95,95 5,95" fill={color} />
    </svg>
  );
}

export function BackgroundShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <Triangle color="var(--shape-yellow)" className="absolute top-10 right-[-30px] w-32 rotate-[20deg] opacity-90" />
      <Triangle color="var(--shape-purple)" className="absolute top-40 left-[-40px] w-56 rotate-[200deg] opacity-90" />
      <Triangle color="var(--shape-pink)" className="absolute top-[55%] right-[-20px] w-24 rotate-[-15deg] opacity-90" />
      <Triangle color="var(--shape-green)" className="absolute bottom-20 left-[8%] w-28 rotate-[140deg] opacity-90" />
      <Triangle color="var(--shape-yellow)" className="absolute bottom-[40%] left-[45%] w-14 rotate-[60deg] opacity-80" />
    </div>
  );
}

export default function SiteShell() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-white rounded-lg px-3 py-2">
              <img src={logo.url} alt="MindCET" className="h-7 w-auto" />
            </div>
          </Link>
          <nav className="flex items-center gap-2 md:gap-6 text-sm md:text-base font-semibold">
            <Link
              to="/"
              activeOptions={{ exact: true }}
              className="px-3 py-2 rounded-md hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              ההכשרה
            </Link>
            <Link
              to="/careers"
              className="px-3 py-2 rounded-md hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              דרושים
            </Link>
            <a
              href="mailto:rachel@mindcet.io?subject=פנייה בנושא Unboxing Challenge"
              className="hidden md:inline-flex items-center bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold hover:opacity-90 transition"
            >
              צרו קשר
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1 relative">
        <Outlet />
      </main>
      <footer className="border-t border-border/60 bg-background/60 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-md px-2 py-1"><img src={logo.url} alt="MindCET" className="h-5" /></div>
            <span>מבית מטח – המרכז לטכנולוגיה חינוכית</span>
          </div>
          <div>
            יצירת קשר:{" "}
            <a href="mailto:rachel@mindcet.io" className="text-primary font-semibold hover:underline">
              rachel@mindcet.io
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
