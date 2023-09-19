import { ReactNode } from "react"

const Layout = ({ children }: {children: ReactNode}) => {
  return (
    <main className="min-h-screen max-w-[549px] mx-auto bg-pure-white">
        {children}
    </main>
  )
}

export default Layout