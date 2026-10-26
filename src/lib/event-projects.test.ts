import { describe, expect, test } from "bun:test";
import { parseEventProjects } from "./event-projects";

const headers = ["חותמת זמן", "שמות אנשי הצוות", "מה היה האתגר?", "הפתרון במשפט- מה הוא עושה, למי הוא מיועד?", "קישור לאפליקציה", "תמונה- צילום מסך מרכזי/תמונה שצילמתם של המוצר/לוגו", "כתובת אימייל"];

describe("Science Museum response mapping", () => {
  test("projects without uploaded images have no image so the gallery uses its placeholder", () => {
    const [project] = parseEventProjects([headers, ["today", "צוות מורים", "קריאה", "תרגול קריאה", "https://example.com/app", "", "private@example.com"]]);
    expect(project?.image).toBeUndefined();
    expect(project?.authors).toBe("צוות מורים");
    expect(project && Object.values(project)).not.toContain("private@example.com");
  });
  test("uploaded Drive images use the restricted image endpoint", () => {
    const [project] = parseEventProjects([headers, ["today", "צוות מורים", "קריאה", "תרגול קריאה", "https://example.com/app", "https://drive.google.com/open?id=abcdefghijklmnop"]]);
    expect(project?.image).toBe("/api/public/event-project-image?id=abcdefghijklmnop");
  });
  test("unsafe application links are excluded", () => {
    expect(parseEventProjects([headers, ["today", "צוות", "", "פתרון", "javascript:alert(1)"]])).toEqual([]);
  });
});