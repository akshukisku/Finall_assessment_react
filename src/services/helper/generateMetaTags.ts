import { MetaData } from "@/types/interface/meta.interface";

export const generateMetaTags = (metadata: MetaData) => {
  return `
<meta property="og:title" content="${metadata.title}" />
<meta property="og:description" content="${metadata.description}" />
<meta property="og:image" content="${metadata.image}" />
<meta property="og:url" content="${metadata.url}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="${metadata.siteName}" />

<meta name="twitter:card" content="${metadata.twitterCard}" />
<meta name="twitter:title" content="${metadata.title}" />
<meta name="twitter:description" content="${metadata.description}" />
<meta name="twitter:image" content="${metadata.image}" />
`.trim();
};