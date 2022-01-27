// theme.config.js
export default {
  titleSuffix: " - Omen RPG",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `${new Date().getFullYear()} © Ben Gorman.`,
  logo: (
    <>
      <svg>...</svg>
      <span>Omen Docs</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Omen: Story Driven RPG" />
      <meta name="og:title" content="Omen: Story Driven RPG" />
    </>
  ),
};
