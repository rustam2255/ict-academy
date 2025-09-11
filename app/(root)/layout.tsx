'use client'
import { ChildProps } from "@/types"

import Footer from "./_components/footer"
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./_components/navbar"), { ssr: false });


const Layout = ({ children }: ChildProps) => {
  return ( 

    <main>
      <Navbar />
      <div className="overflow-x-hidden">{children}</div>
      <Footer />
    </main>

  )
}

export default Layout