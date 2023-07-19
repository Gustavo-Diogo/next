import React from "react"
import Footer from "components/Footer"
import NavBar from "components/Navbar"

interface ContainerProps {
  children: React.ReactNode
}

export const MainContainer = (props: ContainerProps) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  )
}
