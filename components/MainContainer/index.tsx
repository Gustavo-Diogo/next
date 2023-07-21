import React from "react"
import Footer from "components/Footer"
import NavBar from "components/Navbar"

export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
