# Architecture rules

- All application cohorts use the shared ProjectCard renderer in the apps route, including uploaded-image error fallback, so event projects keep the same gallery presentation.
- Never treat a public Google Form submission URL as a response feed; automated gallery imports require access to its response spreadsheet and must expose only project fields, not private respondent data.
- Event projects are read through server-side Google Sheets connector calls with a five-minute cache; Drive image requests are restricted to file IDs present in the event feed to prevent exposure of unrelated private files.