import '@/app/(frontend)/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body>
        <div className="page-wrapper">
          <Header />
          <main className="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
