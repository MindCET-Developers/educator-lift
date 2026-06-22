import { createFileRoute } from "@tanstack/react-router";
import { BackgroundShapes } from "@/components/SiteShell";
import hero from "@/assets/social-cover.jpg";
import img1 from "@/assets/teacher-presenting.jpg";
import img2 from "@/assets/teacher-helping-group.png";
import img3 from "@/assets/training-2.jpg";
import img4 from "@/assets/training-1.jpg";
import img5 from "@/assets/training-3.jpg";
import img6 from "@/assets/training-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unboxing Challenge | הכשרה לפסג\"ות, מועצות ורשתות חינוך" },
      { name: "description", content: "10 מפגשים בהם מורים מפתחים פתרון AI לאתגר פדגוגי מקומי. תכנית הכשרה של MindCET לפסג\"ות, מועצות מקומיות ורשתות חינוך." },
      { property: "og:title", content: "Unboxing Challenge | MindCET" },
      { property: "og:description", content: "הכשרה לפיתוח פתרונות AI לאתגרים פדגוגיים – לפסג\"ות, מועצות ורשתות חינוך." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Home,
});

const sessions = [
  { n: 1, title: "מהו אתגר Unboxing? היכרות עם עולם ה-AI" },
  { n: 2, title: "סדנת כאבים פדגוגים, ועקרונות Design Thinking" },
  { n: 3, title: "לחשוב כמו סטרטאפ: רעיונאות וקנבס פתרון" },
  { n: 4, title: "מהו MVP ואיך יוצרים מסמך הנחות" },
  { n: 5, title: "יצירת אפליקציה באמצעות AI" },
  { n: 6, title: "תכנון טסט: איך נשתמש באפליקציה בכיתה?" },
  { n: 7, title: "טסטים: משתמשים באפליקציה בכיתה" },
  { n: 8, title: "גרסה 2.0 – רואים איך השינויים שלנו עובדים בשטח" },
  { n: 9, title: "הפיץ׳ שלי: איך יוצרים שינוי עמוק בכיתה עם AI" },
  { n: 10, title: "Demo Day – זמן להתגאות: מציגים את הפתרונות שיצרנו יחד" },
];

const audiences = [
  { title: "מרכזי פסג\"ה", desc: "מסלול הכשרה רשמי 30 ש\"ש למורות ומורים מובילים במחוז." },
  { title: "מועצות מקומיות", desc: "קוהורט בית-ספרי או יישובי לפיתוח פתרונות לאתגרים המקומיים שלכם." },
  { title: "רשתות חינוך", desc: "תכנית רוחבית לפיתוח חדשנות פדגוגית רוחבית ברשת." },
];

const goals = [
  { t: "מסוגלות (Agency)", d: "פיתוח תחושת יכולת ומנהיגות בעידן ה-AI ועולם שמשתנה במהירות." },
  { t: "אוריינות AI", d: "סקרנות ולמידה מתמשכת (LLL) – מודל לתלמידים בעידן משתנה." },
  { t: "חשיבה עיצובית", d: "מתודולוגיית Design Thinking – זיהוי כאבים פדגוגיים מהשטח ופתרונם." },
];


function Home() {
  return (
    <div className="relative">
      <BackgroundShapes />

      {/* HERO */}
      <section className="relative max-w-6xl mx-auto px-6 pt-16 pb-24">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" /> הכשרת מורים מובילים
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95]">
              <span className="block text-white">Unboxing</span>
              <span className="block text-accent">Challenge</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              קוהורט הכשרה לפסג"ות, מועצות מקומיות ורשתות חינוך –
              <br />
              מורים מפתחים פתרון <span className="text-white font-bold">AI</span> אמיתי לאתגר פדגוגי מקומי, בלי שורת קוד אחת.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:rachel@mindcet.io?subject=הרשמה לקוהורט Unboxing Challenge&body=שלום רחל,%0D%0Aאנחנו מעוניינים לפתוח קוהורט Unboxing Challenge.%0D%0Aשם הגוף:%0D%0Aאיש קשר:%0D%0Aטלפון:%0D%0Aמספר משתתפים משוער:"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-full hover:opacity-90 transition shadow-[0_10px_40px_-10px_oklch(0.72_0.16_50/0.6)]"
              >
                להרשמה ←
              </a>
              <a
                href="/teachers"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3 rounded-full hover:opacity-90 transition"
              >
                אני מורה ומעוניין/ת
              </a>
              <a
                href="mailto:rachel@mindcet.io?subject=בקשת מידע נוסף – Unboxing Challenge"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full font-bold hover:bg-white/5 transition"
              >
                מידע נוסף
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <Stat n="10" l="מפגשים" />
              <Stat n="30" l="שעות השתלמות" />
            </div>
          </div>
          {/* Hero visual */}
          <div className="hidden md:block relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10">
              <img src={img2} alt="מורים בהכשרה" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[oklch(0.18_0.09_270)]/80 via-transparent to-transparent" />
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full -z-10 blur-2xl"
              style={{ background: "var(--shape-purple)", opacity: 0.6 }}
            />
            <div
              className="absolute -top-6 -left-6 w-28 h-28 rounded-full -z-10 blur-2xl"
              style={{ background: "var(--primary)", opacity: 0.4 }}
            />
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="relative max-w-6xl mx-auto px-6 py-16">
        <SectionTitle eyebrow="למי זה מיועד?" title='בנוי לפסג"ות, מועצות ורשתות' />
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {audiences.map((a, i) => (
            <div key={a.title} className="relative bg-card border border-border/60 rounded-2xl p-7 overflow-hidden group hover:border-primary/60 transition">
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-20" style={{ background: [`var(--shape-pink)`, `var(--shape-green)`, `var(--shape-purple)`][i] }} />
              <div className="text-5xl font-black text-primary/30">0{i + 1}</div>
              <h3 className="text-2xl mt-2">{a.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT WITH IMAGE */}
      <section className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={img1} alt="מורה מציגה בהכשרה" className="rounded-3xl w-full object-contain border border-white/10 bg-card" />
          <div>
            <SectionTitle eyebrow="מה זה Unboxing Challenge?" title="מפתחים פתרון אמיתי. בלי קוד." align="start" />
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              מהלך פדגוגי חדשני של MindCET שמשלב גישת סטארטאפ, חשיבה עיצובית וכלי AI מתקדמים.
              המורים מזקקים אתגר פדגוגי מקומי, מתכננים פתרון, מפתחים אותו בעזרת Vibe Coding,
              ומריצים פיילוט אמיתי בכיתה.
            </p>
            <ul className="mt-6 space-y-3">
              {["ללא ידע קודם בתכנות","פיתוח MVP אמיתי בזמן קצר","פיילוט וגרסה משופרת בשטח","קהילת בוגרים פעילה"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground font-black grid place-items-center text-xs">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="relative max-w-6xl mx-auto px-6 py-16">
        <SectionTitle eyebrow="מטרות ההכשרה" title="שלושה שינויים שמורה לוקח/ת איתו/ה לכיתה" />
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {goals.map((g, i) => (
            <div key={g.t} className="bg-card border border-border/60 rounded-2xl p-7">
              <div className="w-12 h-12 rounded-xl grid place-items-center font-black text-xl" style={{ background: [`var(--shape-yellow)`, `var(--shape-green)`, `var(--shape-pink)`][i], color: "oklch(0.18 0.09 270)" }}>
                {i + 1}
              </div>
              <h3 className="text-xl mt-4">{g.t}</h3>
              <p className="mt-2 text-muted-foreground">{g.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[img4, img3, img5, img6].map((im, i) => (
            <img key={i} src={im} alt="מורים בהכשרה" className="rounded-2xl w-full aspect-square object-cover border border-white/10" />
          ))}
        </div>
      </section>

      {/* 10 SESSIONS */}
      <section className="relative max-w-6xl mx-auto px-6 py-20">
        <SectionTitle eyebrow="הסיליבוס" title="10 מפגשים – ממשתמשים ליוצרים" />
        <div className="grid md:grid-cols-2 gap-3 mt-10">
          {sessions.map((s) => (
            <div key={s.n} className="flex items-center gap-5 bg-card border border-border/60 rounded-2xl p-5 hover:border-primary/60 transition">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/40 grid place-items-center text-primary font-black text-2xl">
                {String(s.n).padStart(2, "0")}
              </div>
              <div className="font-semibold leading-snug">{s.title}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-8 text-sm">
          אורך כל מפגש: 3 ש"ש (2.5 שעות) · פיזי, אונליין ואסינכרוני
        </p>
      </section>

      {/* PRICE / CTA */}
      <section className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[oklch(0.25_0.1_275)] to-[oklch(0.18_0.09_270)] p-10 md:p-16">
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full" style={{ background: "var(--shape-purple)", filter: "blur(60px)", opacity: 0.4 }} />
          <div className="absolute -bottom-20 right-0 w-60 h-60 rounded-full" style={{ background: "var(--primary)", filter: "blur(80px)", opacity: 0.3 }} />
          <div className="relative grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <div className="text-primary font-bold uppercase tracking-wider text-sm">פתיחת קוהורט</div>
              <h2 className="text-4xl md:text-5xl mt-3">רשויות, מרכזי פסג"ה ורשתות חינוך- רוצים לפתוח קבוצה אצלכם?</h2>
              <p className="mt-5 text-lg text-muted-foreground">
                העלות משולמת על ידי הפסג"ה ו/או המועצה המקומית. אנחנו דואגים לכל השאר –
                מנחים, חומרים, פלטפורמה וקהילה.
              </p>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-muted-foreground">עד 20 משתתפים בקבוצה</span>
              </div>
            </div>
            <div className="bg-background/50 border border-white/10 rounded-2xl p-6 backdrop-blur">
              <div className="text-sm text-muted-foreground">לפתיחת קבוצת הכשרה או מידע נוסף:</div>
              <a href="mailto:rachel@mindcet.io?subject=פתיחת קוהורט Unboxing Challenge" className="block mt-2 text-2xl font-bold text-primary hover:underline break-all">
                rachel@mindcet.io
              </a>
              <a
                href={'mailto:rachel@mindcet.io?subject=פתיחת קוהורט Unboxing Challenge&body=שלום רחל,%0D%0Aאנחנו מעוניינים לפתוח קוהורט Unboxing Challenge.%0D%0A%0D%0Aשם הגוף (פסג"ה / מועצה / רשת):%0D%0Aאיש קשר ותפקיד:%0D%0Aטלפון:%0D%0Aמספר משתתפים משוער:%0D%0Aמועד רצוי לפתיחה:'}
                className="mt-5 w-full inline-flex justify-center bg-primary text-primary-foreground font-bold px-6 py-3 rounded-full hover:opacity-90 transition"
              >
                שלחו לנו מייל ←
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <p className="text-center text-sm text-muted-foreground">
          &nbsp;
        </p>
      </section>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-2xl font-black text-primary">{n}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider">{l}</div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, align = "center" }: { eyebrow: string; title: string; align?: "center" | "start" }) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <div className="text-accent font-bold text-sm uppercase tracking-[0.2em]">{eyebrow}</div>
      <h2 className="text-3xl md:text-5xl mt-3">{title}</h2>
    </div>

  );
}
