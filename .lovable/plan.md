Both sponsor logos on `/western-galilee` are actually loading correctly right now:

- `pisga-akko-logo.jpeg` → HTTP 200, natural size 630px
- `moona-logo.jpeg` → HTTP 200, natural size 1600px

The broken-image icons in the screenshot appear to be from a stale preview state before the assets finished uploading. Please hard-refresh the preview (Cmd/Ctrl+Shift+R) — the logos should render.

If after refresh they're still broken, tell me what you see (broken icon vs. blank white box vs. a specific error in the browser console) and I'll dig further. Options I can pursue if needed:

1. Re-upload the two logo files fresh (in case the CDN objects are actually corrupted for you specifically).
2. Swap the `<img>` for a `background-image` on the white card (works around any Content-Disposition oddities).
3. Replace with different logo files if you can share updated versions.

Want me to just re-upload both logos to be safe?