import { createFileRoute } from "@tanstack/react-router";
import { BackgroundShapes } from "@/components/SiteShell";
import img from "@/assets/אתר2.JPG.asset.json" with { type: "json" };

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "דרושים – מנחים מובילים | MindCET" },
      { name: "description", content: "MindCET מגייסת מנחים מובילים להדרכת צוותי חינוך ברחבי הארץ, בדגש על אזור הנגב. הגישו מועמדות עכשיו." },
      { property: "og:title", content: "דרושים – מנחים מובילים | MindCET" },
      { property: "og:description", content: "MindCET מגייסת מנחים מובילים להדרכת צוותי חינוך ברחבי הארץ." },
      { property: "og:image", content: img.url },
    ],
  }),
  component: Careers,
});

const role = [
  "הדרכה והנחייה של צוותי חינוך, בתי ספר ואנשי הוראה במרכז המבקרים של מיינדסט בירוחם וברחבי הארץ.",
  "ליווי תהליכי יזמות של אנשי חינוך לטובת פיתוח מוצרים טכנולוגיים חינוכיים.",
  "אחריות על מבנה התוכן ויצירת הרמוניה בין תוכן, טכנולוגיה ופדגוגיה.",
  "תכנון והוצאה לפועל של אירועי שיא, כנסים וסיורים.",
  'ריכוז הכשרה בת 30 שעות עם מתן מענה אישי ועקבי למשתלמים.',
];

const requirements = [
  "היכרות ותשוקה לעולם הטכנולוגיה החינוכית.",
  "ניסיון פדגוגי והיכרות עם עולם החינוך.",
  "יכולת הובלת קבוצה והנחייה.",
  "יכולות בינאישיות מעולות.",
  "רישיון נהיגה ונכונות לנסיעות.",
  "תואר שני – יתרון.",
  "שפות נוספות – יתרון.",
];

function Careers() {
  return (
    <div className="relative">
      <BackgroundShapes />
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/40 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
          דרושים · Now Hiring
        </div>
        <h1 className="text-5xl md:text-7xl font-black mt-6 leading-[0.95]">
          מנחים <span className="text-primary">מובילים</span>
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl leading-relaxed">
          MindCET מגייסת מנחים מעולים לפעילות ברחבי הארץ, בדגש על אזור הנגב.
          התפקיד כולל הדרכה והנחייה של קבוצות וליווי תהליכי יזמות חינוכית.
        </p>
        <a
          href="mailto:rachel@mindcet.io?subject=הגשת מועמדות – מנחה מוביל/ה ב-MindCET&body=שלום רחל,%0D%0Aמצורפים קורות החיים שלי לתפקיד מנחה מוביל/ה ב-MindCET.%0D%0A%0D%0Aשם:%0D%0Aטלפון:%0D%0Aאזור מגורים:%0D%0A"
          className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-full hover:opacity-90 transition shadow-[0_10px_40px_-10px_oklch(0.78_0.18_55/0.6)]"
        >
          להגשת מועמדות ←
        </a>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6">
        <Card title="מה בתפקיד?" color="var(--shape-yellow)" items={role} />
        <Card title="דרישות" color="var(--shape-green)" items={requirements} />
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-card border border-border/60 rounded-2xl p-7">
          <h3 className="text-2xl">דגשים</h3>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>· משרדי מיינדסט ממוקמים בירוחם.</li>
            <li>· מפגשי ההדרכה מתקיימים גם בשעות אחר הצהריים.</li>
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-8 items-center">
          <img src={img.url} alt="מנחה מיינדסט" className="rounded-3xl w-full aspect-[4/5] object-cover border border-white/10" />
          <div>
            <h2 className="text-3xl md:text-4xl">למה MindCET?</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
              MindCET היא חממת האדטק הראשונה שהוקמה בעולם. אנו מפגישים יזמים, חוקרים
              ואנשי חינוך כדי לפרוץ את הפרדיגמה המסורתית של עולם החינוך ולפתח פתרונות
              טכנולוגיים-חינוכיים רלוונטיים ללומדים ומלמדים בעולם דיגיטלי. מיינדסט
              נחשבת לחלוצה בינלאומית בתחום ומשמשת מוקד עלייה לרגל לארגונים ולמרכזי
              חדשנות בישראל ובעולם.
            </p>
            <p className="mt-4 text-muted-foreground">
              העבודה במיינדסט מתאימה במיוחד לאנשים סקרנים, שחיים ואוהבים תרבות
              דיגיטלית, קצב מהיר ומבט גלובלי.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[oklch(0.25_0.1_275)] to-[oklch(0.18_0.09_270)] p-10 md:p-14 text-center">
          <div className="absolute -top-16 right-10 w-40 h-40 rounded-full" style={{ background: "var(--primary)", filter: "blur(60px)", opacity: 0.4 }} />
          <h2 className="text-3xl md:text-4xl">להגשת מועמדות</h2>
          <p className="mt-4 text-muted-foreground">שלחו קורות חיים אל:</p>
          <a href="mailto:rachel@mindcet.io?subject=הגשת מועמדות – מנחה מוביל/ה ב-MindCET" className="mt-3 inline-block text-3xl font-black text-primary hover:underline break-all">
            rachel@mindcet.io
          </a>
        </div>
      </section>
    </div>
  );
}

function Card({ title, items, color }: { title: string; items: string[]; color: string }) {
  return (
    <div className="relative overflow-hidden bg-card border border-border/60 rounded-2xl p-7">
      <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full opacity-20" style={{ background: color }} />
      <h3 className="text-2xl">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-primary/15 border border-primary/40 grid place-items-center text-primary font-black text-xs mt-0.5">★</span>
            <span className="text-muted-foreground leading-relaxed">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
