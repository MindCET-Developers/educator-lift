import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { parseEventProjects } from "./event-projects";

const headers = ["חותמת זמן", "שמות אנשי הצוות", "מה היה האתגר?", "הפתרון במשפט- מה הוא עושה, למי הוא מיועד?", "קישור לאפליקציה", "תמונה- צילום מסך מרכזי/תמונה שצילמתם של המוצר/לוגו", "כתובת אימייל"];

describe("Science Museum response mapping", () => {
  test("projects without uploaded images have no image so the gallery uses its placeholder", () => {
    const [project] = parseEventProjects([headers, ["today", "צוות מורים", "קריאה", "תרגול קריאה", "https://example.com/app", "", "private@example.com"]]);
    assert.equal(project?.image, undefined);
    assert.equal(project?.authors, "צוות מורים");
    assert.equal(project && Object.values(project).includes("private@example.com"), false);
  });
  test("uploaded Drive images use the restricted image endpoint", () => {
    const [project] = parseEventProjects([headers, ["today", "צוות מורים", "קריאה", "תרגול קריאה", "https://example.com/app", "https://drive.google.com/open?id=abcdefghijklmnop"]]);
    assert.equal(project?.image, "/api/public/event-project-image?id=abcdefghijklmnop");
  });
  test("unsafe application links are excluded", () => {
    assert.deepEqual(parseEventProjects([headers, ["today", "צוות", "", "פתרון", "javascript:alert(1)"]]), []);
  });
});