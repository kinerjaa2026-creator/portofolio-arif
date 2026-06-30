import './globals.css'

export const metadata = {
  metadataBase: new URL('https://arifarrahim.com'),
  title: {
    default: 'Mohamad Arif Arrahim, S.Sos., CIMM',
    template: '%s | Mohamad Arif Arrahim',
  },
  description:
    'Direktur PT Gadai Syariah Berkat Bersama. Islamic Finance Practitioner, Corporate Governance Professional, dan Risk Management Professional di Samarinda.',
  keywords: [
    'Mohamad Arif Arrahim',
    'Islamic Finance',
    'Corporate Governance',
    'Gadai Syariah',
    'Samarinda',
  ],
  openGraph: {
    title: 'Mohamad Arif Arrahim | Islamic Finance Practitioner',
    description:
      'Leading sustainable growth through Sharia values, governance excellence, and strategic leadership.',
    url: 'https://arifarrahim.com',
    siteName: 'Mohamad Arif Arrahim Portfolio',
    locale: 'id_ID',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mohamad Arif Arrahim',
  honorificSuffix: 'S.Sos., CIMM',
  jobTitle: 'Director',
  worksFor: {
    '@type': 'Organization',
    name: 'PT Gadai Syariah Berkat Bersama',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Samarinda',
    addressCountry: 'ID',
  },
  sameAs: ['https://www.linkedin.com/in/mohamad-arif-arrahim-s-sos-cimm-6b18a7351?utm_source=share_via&utm_content=profile&utm_medium=member_ios'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
