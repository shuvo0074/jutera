import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ScrollProgress from '../components/ScrollProgress/ScrollProgress'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

export default function MainLayout({ children }) {
  useSmoothScroll()

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
