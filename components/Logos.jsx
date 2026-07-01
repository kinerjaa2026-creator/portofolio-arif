const iconPaths = {
  briefcase: (
    <>
      <path d="M8 9V7.5A2.5 2.5 0 0 1 10.5 5h3A2.5 2.5 0 0 1 16 7.5V9" />
      <path d="M5 9h14v9.5A1.5 1.5 0 0 1 17.5 20h-11A1.5 1.5 0 0 1 5 18.5V9Z" />
      <path d="M5 13h14" />
      <path d="M10 13v1h4v-1" />
    </>
  ),
  people: (
    <>
      <path d="M9.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M3.5 20a6 6 0 0 1 12 0" />
      <path d="M16 11.5a2.5 2.5 0 1 0 0-5" />
      <path d="M17.5 14a5 5 0 0 1 3 4.5" />
    </>
  ),
  certificate: (
    <>
      <path d="M12 3 14 5.3l3-.3.7 2.9 2.5 1.6-1.3 2.7 1.3 2.7-2.5 1.6-.7 2.9-3-.3-2 2.3-2-2.3-3 .3-.7-2.9-2.5-1.6 1.3-2.7-1.3-2.7 2.5-1.6.7-2.9 3 .3L12 3Z" />
      <path d="m9.7 12.1 1.5 1.5 3.1-3.4" />
    </>
  ),
  trophy: (
    <>
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
      <path d="M8 6H5.5A2.5 2.5 0 0 0 8 11" />
      <path d="M16 6h2.5A2.5 2.5 0 0 1 16 11" />
      <path d="M12 12v4" />
      <path d="M9 20h6" />
      <path d="M10 16h4v4h-4z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 19 6v5.5c0 4-2.7 7.1-7 9.5-4.3-2.4-7-5.5-7-9.5V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  book: (
    <>
      <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 1 5 16.5v-11Z" />
      <path d="M5 16.5A2.5 2.5 0 0 1 7.5 14H19" />
      <path d="M9 7h6" />
    </>
  ),
  chart: (
    <>
      <path d="M5 19h14" />
      <path d="M7 16v-5" />
      <path d="M12 16V7" />
      <path d="M17 16v-8" />
      <path d="m7 11 5-4 5 1" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16" />
      <path d="M6 7h12" />
      <path d="m7 7-3 6h6L7 7Z" />
      <path d="m17 7-3 6h6l-3-6Z" />
      <path d="M9 20h6" />
    </>
  ),
  article: (
    <>
      <path d="M6 4h12v16H6z" />
      <path d="M9 8h6" />
      <path d="M9 12h6" />
      <path d="M9 16h4" />
    </>
  ),
}

export function BrandLogo({ className = 'h-14 w-[220px] sm:h-16 sm:w-[280px]' }) {
  return (
    <img
      src="/images/brand-logo-cropped.png"
      alt="Mohamad Arif Arrahim logo"
      className={`${className} shrink-0 object-contain`}
    />
  )
}

export function IconLogo({ name, className = '' }) {
  return (
    <span
      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 shadow-sm ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {iconPaths[name] || iconPaths.shield}
      </svg>
    </span>
  )
}
