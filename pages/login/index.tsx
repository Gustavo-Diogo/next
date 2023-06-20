import Image from "next/image"
import NavBar from "components/Navbar"
import LeftPanel from "../../assets/left-panel.svg"

const LoginPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-gray-bg">
      <NavBar />

      <div className="mt-12 flex h-3/4 w-8/12 flex-row rounded-3xl shadow-xl">
        <div className="relative w-full min-w-0">
          <Image src={LeftPanel} alt="LeftPanel" className="h-full w-full rounded-l-3xl object-cover" />

          <div className="absolute inset-x-12 bottom-0 flex h-32 flex-col gap-1">
            <span className=" text-2xl font-extrabold text-purpleT">Bem-vindo ao Teasy Bot!</span>
            <span className=" font-normal text-text">
              A chave para uma interação perfeita está em suas mãos. Faça login e descubra o poder da comunicação
              inteligente.
            </span>
          </div>
        </div>
        <div className="h-full w-full"></div>
      </div>
    </div>
  )
}

export default LoginPage
