/**
 * Renders one or more JSON-LD blocks as <script type="application/ld+json">.
 * Server component (no "use client") so it can sit in a page's server component.
 * SEO Plan doc 09, Phase 3.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Our own static data (no user input). The `<` escape defends against
          // a stray "</script>" ever breaking out of the tag.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
