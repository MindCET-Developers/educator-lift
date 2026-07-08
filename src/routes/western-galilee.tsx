import { createFileRoute, Link } from "@tanstack/react-router";
import { BackgroundShapes } from "@/components/SiteShell";
import flyerAsset from "@/assets/western-galilee-flyer.jpg.asset.json";
import videoAsset from "@/assets/unboxing-challenge.mp4.asset.json";

const FORM_URL = "https://forms.gle/PxcYhb19fkZa5UF99";

export const Route = createFileRoute("/western-galilee")({
  head: () => ({
    meta: [
      { title: "גליל מערבי – הכשרת Unboxing Challenge | MindCET" },
      { name: "description", content: "הכשרת Unboxing Challenge למורות ומורים באזור הגליל המערבי. בשיתוף פסג\"ה עכו ו-MOONA." },
      { property: "og:title", content: "גליל מערבי – הכשרת Unboxing Challenge" },
      { property: "og:description", content: "הצטרפו להכשרה האזורית לפיתוח אפליקציות AI לכיתה בגליל המערבי." },
    ],
  }),
  component: WesternGalilee,
});

const highlights = [
  { t: "מתכונת היברידית", d: "שילוב של מפגשים פרונטליים במרכז הלמידה גרנות ומפגשים סינכרוניים בזום" },
  { t: "30 ש\"ש גמול השתלמות", d: "ההכשרה מזכה ב-30 שעות שנתיות של גמול השתלמות." },
  { t: "ללא ידע קודם בתכנות", d: "בונים אפליקציית AI אמיתית לאתגר פדגוגי שלכם – שלב אחר שלב." },
];

function WesternGalilee() {
  return (
    <div className="relative">
      <BackgroundShapes />

      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-accent" /> קוהורט אזורי · גליל מערבי
        </div>
        <h1 className="text-5xl md:text-6xl font-black leading-[0.95]">
          <span className="block text-white">Unboxing Challenge</span>
          <span className="block text-accent">גליל מערבי</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          הכשרה ייעודית למורות ומורים באזור הגליל המערבי – פיתוח אפליקציית AI לאתגר הפדגוגי שלכם,
          בליווי צמוד של צוות מיינדסט. ההכשרה מזכה ב-30 ש"ש גמול השתלמות.{" "}
          <Link to="/teachers" className="text-accent hover:underline font-semibold">
            למידע נוסף על התכנית למורים ←
          </Link>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3 rounded-full hover:opacity-90 transition shadow-[0_10px_40px_-10px_oklch(0.78_0.09_295/0.6)]"
          >
            הרשמה ←
          </a>
          <a
            href="#details"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition"
          >
            פרטים נוספים
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-12">
        <img
          src={flyerAsset.url}
          alt="פלייר הכשרת Unboxing Challenge – גליל מערבי"
          className="w-full rounded-2xl border border-white/10 shadow-2xl"
          loading="lazy"
          decoding="async"
        />
      </section>

      <section id="details" className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl md:text-4xl">איך זה עובד</h2>
        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((b) => (
            <li key={b.t} className="bg-card border border-border/60 rounded-2xl p-5">
              <div className="font-bold text-lg">{b.t}</div>
              <div className="text-muted-foreground mt-1">{b.d}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[oklch(0.25_0.1_275)] to-[oklch(0.18_0.09_270)] p-8 md:p-12">
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full" style={{ background: "var(--shape-purple)", filter: "blur(60px)", opacity: 0.4 }} />
          <div className="absolute -bottom-20 right-0 w-60 h-60 rounded-full" style={{ background: "var(--accent)", filter: "blur(80px)", opacity: 0.3 }} />
          <div className="relative">
            <div className="text-accent font-bold uppercase tracking-wider text-sm">טופס הרשמה</div>
            <h2 className="text-4xl md:text-5xl mt-3">שריינו את מקומכם</h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
              מלאו את הטופס ונחזור אליכם עם כל הפרטים על מועדי המפגשים, המיקומים והחומרים המקדימים.
            </p>

            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-7 py-4 rounded-full hover:opacity-90 transition shadow-[0_10px_40px_-10px_oklch(0.78_0.09_295/0.6)] text-lg"
            >
              מילוי טופס ההרשמה ←
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
