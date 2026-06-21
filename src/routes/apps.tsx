import { createFileRoute } from "@tanstack/react-router";
import { BackgroundShapes } from "@/components/SiteShell";

export const Route = createFileRoute("/apps")({
  head: () => ({
    meta: [
      { title: "אפליקציות מורים – Unboxing Challenge | MindCET" },
      {
        name: "description",
        content:
          "גלריית האפליקציות שפיתחו מורות ומורים בהכשרות Vibe Coding של MindCET – פתרונות EdTech אמיתיים מהכיתה.",
      },
      { property: "og:title", content: "גלריית אפליקציות המורים | MindCET" },
      {
        property: "og:description",
        content:
          "עשרות פתרונות EdTech שנבנו על שולחן המורה — מירוחם ורמת נגב, מקרית מלאכי וחריש, מרהט ועוד.",
      },
    ],
  }),
  component: Apps,
});

type App = {
  n: string;
  authors: string;
  title: string;
  desc: string;
  school?: string;
  url: string;
};

type Cohort = {
  name: string;
  subtitle: string;
  apps: App[];
};

const cohorts: Cohort[] = [
  {
    name: "תכנית ברנקו וייס – מישרים",
    subtitle: "8 פרויקטים",
    apps: [
      { n: "01", authors: "נטליה מקובצקי וימית כהן", title: "צ׳אק אין מה בשליטתי", desc: "כלי צ׳אק־אין יומי שעוזר למורות ולתלמידים לזהות מה בשליטתם ומה לא — ולפתוח את היום ממקום של בחירה.", school: "דרור, חיפה", url: "https://wandering-mentor-path-pro.base44.app/" },
      { n: "02", authors: "רבקה ביטון", title: "אלי-קשר", desc: "מערכת קשר חכמה למורי בית הספר, שמרכזת תורנויות, משימות ועדכונים במקום אחד.", school: "אלי כהן, קריית מלאכי", url: "https://magic-patrol-duty-now.base44.app/" },
      { n: "03", authors: "לימור עזרן ואושרית בן חמו", title: "מחשבתון", desc: "פלטפורמת משחק־מחשבה שמחברת בין למידה משמעותית להנאה אמיתית.", school: "אפרים בן דוד", url: "https://mishbavton-learn-play.base44.app/" },
      { n: "04", authors: "חדוה נדב ולי סול", title: "Differentio", desc: "כלי הוראה מותאם אישית שמייצר חומרים דיפרנציאליים לפי רמות בכיתה.", school: "אחוות אחים, קרית מלאכי", url: "https://differ-lesson-now.base44.app/" },
      { n: "05", authors: "כרם ומוחמד אבו מדיגם", title: "TeachToc", desc: "אפליקציית שיעור־בתנועה, שמרכזת את כל הפעילות הכיתתית במסך אחד למורה.", school: "אלרסאלה, רהט", url: "https://teach-lesson-go.base44.app/" },
      { n: "06", authors: "אושרית עטון ורינת מדינה", title: "קוראים בהנאה", desc: "מרחב קריאה עצמאי שמלווה תלמידים צעירים עם משחקים, אתגרים ותחושת הצלחה.", school: "מצפה, באר שבע", url: "https://read-joy-flow.base44.app/" },
      { n: "07", authors: "דורין רז ועדי שושן", title: "הרדאר החברתי", desc: "רדאר חברתי לכיתה — כלי שמסייע למחנכות לזהות דינמיקות חברתיות בזמן אמת.", school: "אמירים, קרית ים", url: "https://script.google.com/macros/s/AKfycbyhbh7EPHn5IMHFH8zTBxO98HigXRufHHrUnM5GYLBxTki1jAXxkhJMAgNm8LSkXx1j/exec" },
      { n: "08", authors: "מרג׳י טל ושירה פישמן-עופרי", title: "מצפן ברון", desc: "מצפן אישי לבחירת כיוון לימודי, שמלווה תלמידי תיכון בקבלת החלטות.", school: "תלמי רון, חריש", url: "https://baron-compass-guide.base44.app/" },
    ],
  },
  {
    name: "ירוחם ורחמ'ה",
    subtitle: "7 פרויקטים",
    apps: [
      { n: "09", authors: "סלימאן סלאח", title: "Smart School Bag", desc: "ארגון חכם של תיק בית הספר — תזכורות, מערכת ופריטים שלא נשכחים יותר.", school: "רחמ'ה", url: "https://smart-school-bag.base44.app/" },
      { n: "10", authors: "עדי וזהורית", title: "עברית בזרימה", desc: "כלי אינטראקטיבי ללימוד עברית לילדים בכיתות הנמוכות, בקצב שלהם.", school: "מאוחד, ירוחם", url: "https://ivrit-flow-kids.base44.app/" },
      { n: "11", authors: "סיהאם ונדא", title: "Daily Pulse — נג׳ום", desc: "פלטפורמת נג׳ום למעקב יומי אחר תלמידים, רגשות ולמידה.", school: "רחמ'ה", url: "https://brawny-my-daily-pulse.base44.app/" },
      { n: "12", authors: "פנינה", title: "Joy Class Vibe", desc: "אקלים כיתה מסוג חדש — מדידה, משחק וחיזוקים שמייצרים אווירה טובה.", school: "שחר, ירוחם", url: "https://joy-class-vibe.base44.app/" },
      { n: "13", authors: "זאהר", title: "תקציב גפן", desc: "מערכת לניהול תקציב כיתתי ובית־ספרי, שקופה ופשוטה לכל הצוות.", school: "רחמ'ה", url: "https://gafan-budget-flow.base44.app/" },
      { n: "14", authors: "בת אל ומאי", title: "Smart School Sync", desc: "סנכרון חכם בין מערכת בית הספר, מורים ותלמידים — בלי בלאגן.", school: "מאוחד, ירוחם", url: "https://mutant-smart-school-sync.base44.app/" },
      { n: "15", authors: "טטיאנה ואתי", title: "קישורינו — Connect Hub", desc: "מרכז קישור בין מורים, הורים ותלמידים — תקשורת אחת, ממוקדת.", school: "מאוחד, ירוחם", url: "https://kishreenu-connect-hub.base44.app/" },
    ],
  },
  {
    name: "דימונה",
    subtitle: "8 פרויקטים",
    apps: [
      { n: "16", authors: "אייל", title: "דימונעים", desc: "דימונעים — מידע מטאורולוגי מותאם לדימונה ולתלמידיה.", url: "https://project-pulse-copy-753a595d.base44.app/" },
      { n: "17", authors: "טטיאנה ובת אל", title: "SkillShare", desc: "פלטפורמת קורסים שיתופיים שמופעלת על ידי תלמידים בשביל תלמידים.", url: "https://skill-share-connect-eb9db17e.base44.app/" },
      { n: "18", authors: "תהילה", title: "דיווח נוכחות ומילויי מקום", desc: "ניהול נוכחות ושיבוץ מילויי מקום — בלי שיחות בהפסקה.", url: "https://substitute-teacher-manager-copy-2d9e02d4.base44.app/" },
      { n: "19", authors: "יאנה אילייסוב", title: "Plan Smart", desc: "בניית תוכנית ומערכי שיעור מותאמי רמות בלחיצת כפתור.", url: "https://plan-click-teach.base44.app/" },
      { n: "20", authors: "עליזה", title: "אלופי האיות", desc: "תרגול ממוקד של שגיאות כתיב, מותאם אישית לכל לומדת.", url: "https://spell-master-9033aeed.base44.app/" },
      { n: "21", authors: "תמי", title: "עובדים בקליק", desc: "מיומנויות תעסוקה לחינוך מיוחד — בקליק, בקצב של התלמיד.", url: "https://app-6b4175e1.base44.app/" },
      { n: "22", authors: "שוהם", title: "מדריך חקלאי דיגיטלי", desc: "מדריך חקלאי דיגיטלי לבתי ספר חקלאיים — צמחים, חוות וגידולים.", url: "https://preview--digi-sadeh-guide.lovable.app/" },
      { n: "23", authors: "נילי וטופז", title: "VoicePlanner", desc: "תמלול ותיעוד פגישות לצוות החינוכי — כדי שלא יישכח שום דבר חשוב.", url: "https://voiceplanner.replit.app/" },
    ],
  },
  {
    name: "מתחילים",
    subtitle: "2 פרויקטים",
    apps: [
      { n: "24", authors: "אירינה סיזיקוב", title: "תזכורת הבאת ציוד", desc: "תזכורות חכמות להבאת ציוד — תלמידים מגיעים מוכנים, מורים נושמים.", url: "https://app-3bd223ea.base44.app/" },
      { n: "25", authors: "מעין שם טוב", title: "Breath", desc: "כלי טיפולי קצר לוויסות נשימה — לשיפור אקלים ולמידה בכיתה.", url: "https://breathe-buddy-calm.base44.app/" },
    ],
  },
  {
    name: "Demo Day · ירוחם ורמת נגב",
    subtitle: "8 פרויקטים",
    apps: [
      { n: "01", authors: "גפן וג'וזפין", title: "חדר מורים שמחבק", desc: "חיפשו דרך לחזק את תחושת השייכות של המורים בחדר המורים — בעולם שבו תרבות ההערכה למורים לא תמיד קיימת.", url: "https://school-pulse-care.base44.app/" },
      { n: "02", authors: "יעל", title: "בגרות בעיצוב — כמשחק", desc: "משחק שנועד להפוך את החלק היבש והתיאורטי של הבגרות בעיצוב לחוויה מהנה יותר.", url: "https://design-odyssey-play.base44.app/" },
      { n: "03", authors: "מיכאל", title: "מרכז ההתאמות", desc: "יוצר אפליקציות סדרתי, שהפעם עיצב מערכת שלמה לריכוז כל נושא ההתאמות בבית הספר — ואולי בקרוב בכל המועצה.", url: "https://exam-adjust-pro.base44.app/" },
      { n: "04", authors: "הילה", title: "התקציב של המורה", desc: "המנהלנית המסורה של בי\"ס צין באה ללמוד ופיתחה מערכת שמאפשרת למורים לראות ולנהל את התקציב שלהם. העצמת מורים, כבר אמרנו?", url: "https://teacher-budget-buddy.base44.app/" },
      { n: "05", authors: "שרון", title: "יועץ אקלים כיתתי", desc: "אפליקציה שנותנת עצות לניהול הכיתה ומענה לבעיות אקלים כיתתי — לפי השכבה והבעיה הספציפית שעולה.", url: "https://sos-lamore.netlify.app/" },
      { n: "06", authors: "גבריאל", title: "ויסות בזמן אמת", desc: "מורה לחינוך מיוחד שיצר פלטפורמה שעוזרת לתלמידיו לווסת את עצמם בזמן אמת — ומלמדת אותם ואת המורה איך הם הכי מצליחים להירגע, עם דאטה אמיתי מהמערכת.", url: "https://truthful-mind-sync-flow.base44.app/Dashboard" },
      { n: "07", authors: "תמר", title: "החקלאי והתלמיד", desc: "מערכת שמתאמת בין הצרכים של החקלאי לתלמידים בבתי ספר לחקלאות — ושמה את האחריות על התלמיד.", url: "https://tangible-farm-shift-sync.base44.app/" },
      { n: "08", authors: "רייצ'ל", title: "מורה־פנוי, עכשיו", desc: "רייצ'ל חיפשה דרך למקסם את זמן הפרטני של מורים עם תלמידים, בלו\"ז עמוס. היא יצרה אפליקציה בסגנון טינדר, שבה תלמידים רואים אילו מורים זמינים בשעות הפנויות שלהם — ומחליקים שמאלה וימינה.", url: "https://partani-match-now.base44.app/" },
    ],
  },
];

function Apps() {
  const totalApps = cohorts.reduce((sum, c) => sum + c.apps.length, 0);

  return (
    <div className="relative">
      <BackgroundShapes />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-accent" /> גלריית אפליקציות
        </div>
        <h1 className="text-5xl md:text-6xl font-black leading-[0.95]">
          <span className="block text-white">כשנותנים למורות כלים,</span>
          <span className="block text-accent">הן בונות את ה‑EdTech</span>
          <span className="block text-white">שאף סטארטאפ לא חשב עליו.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          {totalApps} פתרונות שפיתחו מורות ומורים בהכשרות Vibe Coding של MindCET — מירוחם ורמת נגב, מקרית מלאכי וחריש,
          מרהט וחיפה. כל אפליקציה התחילה מאתגר אמיתי בכיתה, ונבנתה ברצף קצר של אפיון, פרומפט, MVP וטסט.
        </p>
      </section>

      {/* STORY */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="rounded-3xl border border-white/10 bg-card/60 backdrop-blur p-8 md:p-12">
          <div className="text-accent font-bold uppercase tracking-wider text-sm">— הסיפור —</div>
          <h2 className="text-3xl md:text-4xl mt-3">שמונה הכשרות. עשרות פתרונות. קהילה פדגוגית אחת.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            המורים הגדירו אתגר יומיומי, יצאו לתהליך רעיונאות וחשיבה עיצובית, בנו PRD, יצרו פרומפט והפעילו פלטפורמת Vibe
            Coding. כל אפליקציה כאן יצאה לטסט בכיתה — חזרה לפידבק, ועברה איטרציה אמיתית. רוב האפליקציות נבנו ב‑Base44,
            חלקן ב‑Lovable, Replit ו‑Google Apps Script.
          </p>
        </div>
      </section>

      {/* COHORTS */}
      {cohorts.map((cohort) => (
        <section key={cohort.name} className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex items-end justify-between mb-6 gap-4 flex-wrap">
            <h2 className="text-2xl md:text-3xl">{cohort.name}</h2>
            <span className="text-sm text-muted-foreground font-semibold">{cohort.subtitle}</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cohort.apps.map((a) => (
              <a
                key={a.n + a.title}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col bg-card border border-border/60 rounded-2xl p-6 hover:border-accent/60 hover:-translate-y-1 transition-all shadow-[0_10px_30px_-20px_oklch(0_0_0/0.5)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-black text-accent tracking-wider">{a.n}</span>
                  <span className="text-xs text-muted-foreground">{a.authors}</span>
                </div>
                <div className="font-bold text-lg mt-3 leading-snug">{a.title}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">{a.desc}</p>
                <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between text-sm">
                  {a.school ? (
                    <span className="text-muted-foreground">{a.school}</span>
                  ) : (
                    <span />
                  )}
                  <span className="text-accent font-bold group-hover:translate-x-[-4px] transition-transform">
                    פתיחת האפליקציה ←
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[oklch(0.25_0.1_275)] to-[oklch(0.18_0.09_270)] p-10 md:p-14">
          <div
            className="absolute -top-20 -left-20 w-60 h-60 rounded-full"
            style={{ background: "var(--shape-purple)", filter: "blur(60px)", opacity: 0.4 }}
          />
          <div
            className="absolute -bottom-20 right-0 w-60 h-60 rounded-full"
            style={{ background: "var(--accent)", filter: "blur(80px)", opacity: 0.3 }}
          />
          <div className="relative">
            <div className="text-accent font-bold uppercase tracking-wider text-sm">— ממשתמש ליוצר —</div>
            <h2 className="text-4xl md:text-5xl mt-3">ה‑EdTech הכי טוב נבנה על שולחן המורה.</h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
              רוצים להביא את ההכשרה "Unboxing School — ממשתמש ליוצר" לבית הספר שלכם? הצטרפו למאות המורים שכבר עברו את
              המסע.
            </p>
            <a
              href={'mailto:rachel@mindcet.io?subject=פנייה בנושא הכשרת Unboxing School'}
              className="mt-7 inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3 rounded-full hover:opacity-90 transition shadow-[0_10px_40px_-10px_oklch(0.78_0.09_295/0.6)]"
            >
              דברו איתנו ←
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
