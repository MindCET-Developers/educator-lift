import { createFileRoute } from "@tanstack/react-router";
import { BackgroundShapes } from "@/components/SiteShell";
import img from "@/assets/teachers-workshop.jpg";
import unboxingVideo from "@/assets/unboxing-challenge.mp4.asset.json";

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: "מורות ומורים – הצטרפו ל-Unboxing Challenge | MindCET" },
      { name: "description", content: "מורות ומורים שמעוניינים להשתתף ב-Unboxing Challenge – השאירו פרטים ונחבר אתכם לקוהורט הקרוב באזורכם." },
      { property: "og:title", content: "מורים מעוניינים – Unboxing Challenge | MindCET" },
      { property: "og:description", content: "מעוניינים להשתתף בהכשרה? השאירו פרטים." },
      { property: "og:image", content: img },
    ],
  }),
  component: Teachers,
});

const benefits = [
  { t: "30 ש\"ש מוכרות", d: "הכשרה רשמית המוכרת לגמול השתלמות דרך מרכזי הפסג\"ה." },
  { t: "ללא ידע קודם", d: "מפתחים פתרון AI אמיתי גם בלי רקע בתכנות – צעד אחר צעד." },
  { t: "פתרון לכיתה שלכם", d: "האתגר הפדגוגי שלכם הופך לאפליקציה שמשרתת אתכם והתלמידים." },
  { t: "קהילת בוגרים", d: "מצטרפים לקהילה ארצית של מורות ומורים יוזמים בעידן ה-AI." },
];

function Teachers() {
  return (
    <div className="relative">
      <BackgroundShapes />

      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-accent" /> למורות ולמורים
        </div>
        <h1 className="text-5xl md:text-6xl font-black leading-[0.95]">
          <span className="block text-white">מעוניינים</span>
          <span className="block text-accent">להשתתף בהכשרה?</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          הכשרת Unboxing Challenge נפתחת דרך מרכזי פסג"ה, מועצות מקומיות ורשתות חינוך.
          אם אתם רוצים להשתתף – השאירו פרטים ונעדכן אתכם כשנפתחת קבוצה באזורכם.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={img} alt="מורים בסדנה" className="rounded-3xl w-full aspect-[4/5] object-cover border border-white/10" />
          <div>
            <h2 className="text-3xl md:text-4xl">מה תקבלו</h2>
            <ul className="mt-6 space-y-4">
              {benefits.map((b) => (
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
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[oklch(0.25_0.1_275)] to-[oklch(0.18_0.09_270)] p-10 md:p-14">
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full" style={{ background: "var(--shape-purple)", filter: "blur(60px)", opacity: 0.4 }} />
          <div className="absolute -bottom-20 right-0 w-60 h-60 rounded-full" style={{ background: "var(--accent)", filter: "blur(80px)", opacity: 0.3 }} />
          <div className="relative">
            <div className="text-accent font-bold uppercase tracking-wider text-sm">השאירו פרטים</div>
            <h2 className="text-4xl md:text-5xl mt-3">הצטרפו לקבוצה הבאה</h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
              שלחו לנו מייל קצר עם השם, בית הספר והפסג"ה שאליה אתם משתייכים – ונחזור אליכם בהקדם.
            </p>
            <a
              href={'mailto:rachel@mindcet.io?subject=מורה מעוניין/ת ב-Unboxing Challenge&body=שלום רחל,%0D%0Aאני מעוניין/ת להשתתף ב-Unboxing Challenge.%0D%0A%0D%0Aשם:%0D%0Aבית הספר:%0D%0Aהפסג"ה / מועצה / רשת:%0D%0Aטלפון:%0D%0Aתחום הוראה:%0D%0Aהאתגר הפדגוגי שמעניין אותי לפתור:'}
              className="mt-7 inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3 rounded-full hover:opacity-90 transition shadow-[0_10px_40px_-10px_oklch(0.78_0.09_295/0.6)]"
            >
              שליחת פנייה ←
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
