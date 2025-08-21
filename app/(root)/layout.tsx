import { ChildProps } from "@/types"
import Navbar from "./_components/navbar"
import Footer from "./_components/footer"


const Layout = ({ children }: ChildProps) => {
  return ( 

    <main>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-[5vh]">{children}</div>
      <Footer />
    </main>

  )
}

export default Layout