import { ChildProps } from "@/types"
import Navbar from "./_components/navbar"
import Footer from "./_components/footer"


const Layout = ({ children }: ChildProps) => {
  return ( 

    <main>
      <Navbar />
      <div className="container pt-3">{children}</div>
      <Footer />
    </main>

  )
}

export default Layout