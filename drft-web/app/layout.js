import "./globals.css";

export const metadata = {
    title: "DRFT | Hire Global Talent: Unleash Amazing Opportunities Now!",
    description: "Unlock the potential of your business by hiring the best global talent. Energize your growth with amazing opportunities—start your journey today!",
    keywords: ["Hire Global Talent", "remote talent", "online jobs", "job vacancies", "jobs part time jobs", "working from home sri lanka", "tops jobs", "online from jobs", "DRFT", "DRFT Global"],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/drft-web/app/favicon.ico"/>

            {/* Primary Meta Tags */}
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={metadata.keywords.join(", ")} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Open Graph / Facebook */}
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:image" content="/Meta.png" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://drftglobal.com" />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metadata.title} />
            <meta name="twitter:description" content={metadata.description} />
            <meta name="twitter:image" content="/Meta.png" />
        </head>
        <body className={`Montserrat antialiased`}>
        {children}
        </body>
        </html>
    );
}
