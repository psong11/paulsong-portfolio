import type { MDXComponents } from "mdx/types";

// Required by Next.js when @next/mdx is configured. Kept minimal — styling is
// done globally via .prose-article in globals.css so the MDX output stays
// plain HTML elements.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
