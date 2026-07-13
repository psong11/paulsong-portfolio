// Feature flags, read from environment variables at render time.
//
// These are read in Server Components, so they use plain (non-NEXT_PUBLIC)
// env vars — the values never ship to the browser bundle. Each flag is a
// kill-switch: the feature is ON by default and only turns off when the var
// is explicitly set to a falsy string ("false" / "0" / "off").

function isOn(value: string | undefined): boolean {
  const v = value?.trim().toLowerCase();
  return v !== "false" && v !== "0" && v !== "off";
}

/**
 * Show my personal "thought" notes in the Reading shelf.
 * On by default. Set SHOW_BOOK_THOUGHTS=false to hide them everywhere
 * (author quotes and the shelf itself stay visible).
 */
export function showBookThoughts(): boolean {
  return isOn(process.env.SHOW_BOOK_THOUGHTS);
}
