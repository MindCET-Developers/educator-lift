import { createFileRoute } from "@tanstack/react-router";
import { BackgroundShapes } from "@/components/SiteShell";
import photo from "@/assets/ashkelon-teachers.jpg.asset.json";

const FORM_URL = "https://forms.gle/1QTQ4xWqmB8xdaqZ9";

export const Route = createFileRoute("/ashkelon-coast")({
  head: () => ({
    meta: [
      { title: "חוף אשקלון – הכשרת Unboxing Challenge | MindCET" },
      { name: "description", content: "הכשרת Unboxing Challenge למורות ומורים באזור חוף אשקלון. ימי רביעי 16:00–18:30, מפגשים מקוונים ופרונטליים במחלקת החינוך, דמו דיי במיינדסט." },
      { property: "og:title", content: "חוף אשקלון – הכשרת Unboxing Challenge" },
      { property: "og:description", content: "הצטרפו להכשרה האזורית לפיתוח אפליקציות AI לכיתה. ימי רביעי 16:00–18:30." },
      { property: "og:image", content: photo.url },
    ],
  }),
  component: AshkelonCoast,
});

const highlights = [
  { t: "ימי רביעי", d: "16:00 – 18:30" },
  { t: "מתכונת היברידית", d: "חלק מהמפגשים בזום, חלק במחלקת החינוך של מועצת חוף אשקלון ובמתחם החדשנות של MindCET בירוחם." },
  { t: "Demo Day במיינדסט", d: "מפגש הסיום וההצגה של האפליקציות שלכם יתקיים במתחם החדשנות של MindCET בירוחם." },
  { t: "ללא ידע קודם בתכנות", d: "בונים אפליקציית AI אמיתית לאתגר פדגוגי שלכם – שלב אחר שלב." },
];

function AshkelonCoast() {
  return (
    <div className="relative">
      <BackgroundShapes />

      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-accent" /> קוהורט אזורי · חוף אשקלון
        </div>
        <h1 className="text-5xl md:text-6xl font-black leading-[0.95]">
          <span className="block text-white">Unboxing Challenge</span>
          <span className="block text-accent">חוף אשקלון</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          הכשרה ייעודית למורות ומורים במועצה האזורית חוף אשקלון – פיתוח אפליקציית AI לאתגר הפדגוגי שלכם,
          בליווי צמוד של צוות מיינדסט ומחלקת החינוך.
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

      <section id="details" className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={photo.url}
            alt="מורות ומורים מצטיינים בהכשרת Unboxing Challenge"
            className="rounded-3xl w-full aspect-[4/3] object-cover border border-white/10"
          />
          <div>
            <h2 className="text-3xl md:text-4xl">איך זה עובד</h2>
            <ul className="mt-6 space-y-4">
              {highlights.map((b) => (
                <li key={b.t} className="bg-card border border-border/60 rounded-2xl p-5">
                  <div className="font-bold text-lg">{b.t}</div>
                  <div className="text-muted-foreground mt-1">{b.d}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
            <div className="mt-4 text-sm text-muted-foreground break-all">
              {"\n"}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
