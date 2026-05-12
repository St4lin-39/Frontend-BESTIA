import { Navbar } from "./Navbar"
import { BannerFooter } from "./BannerFooter"
export function Layout({children}){
    return(
        <>
      <Navbar />

      <main className="main-container">
        {children}
      </main>

      <BannerFooter />
    </>
  )
}