# Architecture rules

- All application cohorts use the shared ProjectCard renderer in the apps route, including uploaded-image error fallback, so event projects keep the same gallery presentation.
- Never treat a public Google Form submission URL as a response feed; automated gallery imports require access to its response spreadsheet and must expose only project fields, not private respondent data.