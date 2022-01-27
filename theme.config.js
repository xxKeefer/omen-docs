// theme.config.js
export default {
    projectLink: 'https://github.com/xxKeefer/omen-docs',
    docsRepositoryBase: 'https://github.com/xxKeefer/omen-docs', // base URL for the docs repository
    titleSuffix: ' - Omen RPG',
    nextLinks: true,
    prevLinks: true,
    search: true,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    footer: true,
    footerText: `Omen RPG ${new Date().getFullYear()} © Ben Gorman.`,
    footerEditLink: false,
    logo: (
        <>
            <svg>...</svg>
            <span>Omen RPG</span>
        </>
    ),
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Omen: The Story driven RPG" />
            <meta name="title" content="Omen: The Story driven RPG" />
        </>
    ),
}
