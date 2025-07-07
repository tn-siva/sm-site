import './globals.css'

export const metadata = {
  title: 'Shub Mangal - Wedding Planners',
  description: 'Traditional South Indian wedding planners specializing in Tamil, Telugu, Kannada, and Malayalam ceremonies. Expert destination wedding and event management services.',
  keywords: 'wedding planners, Tamil wedding, Telugu wedding, Kannada wedding, Malayalam wedding, South Indian wedding, traditional wedding, destination wedding, Chennai wedding planners',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}