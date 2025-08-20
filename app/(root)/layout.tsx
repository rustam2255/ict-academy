import { ChildProps } from "@/types"
import Navbar from "./_components/navbar"
import Footer from "./_components/footer"


const Layout = ({ children }: ChildProps) => {
  return ( 

    <main>
      <Navbar />
      <div className="container pt-[13.5vh]">{children}</div>
      <Footer />
    </main>

  )
}

export default Layout