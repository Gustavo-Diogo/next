import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import Checkbox from "components/Checkbox"
import NavBar from "components/Navbar"
import PrimaryButton from "components/PrimaryButton"
import LeftPanel from "components/Images/LeftPanel"
import TextInput from "components/TextInput"
// import LeftPanel from "../../assets/left-panel.svg"
import Icon from "../../assets/teasy-icon.svg"

const LoginPage = () => {
  const [accessKey, setAccessKey] = useState("")
  const [remember, setRemember] = useState(false)
  const router = useRouter()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setAccessKey(newValue)
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center bg-gray-bg">
      <NavBar />

      {/* white box div */}
      <div className="m-12 flex h-full flex-col rounded-3xl bg-white shadow-xl md:flex-row">
        {/* left panel box */}
        <div className="relative w-full">
          {/* <img
            src={"left-panel.svg"}
            alt="LeftPanel"
            className="h-full w-full rounded-3xl object-cover md:rounded-r-none"
          /> */}

          <LeftPanel />

          <div className="absolute inset-x-12 bottom-0 hidden flex-col gap-1 md:flex">
            <span className="text-md text-purpleT-primary md:text-2xl">Bem-vindo ao Teasy Bot!</span>
            <span className="font-normal tracking-tighter text-text md:text-base">
              A chave para uma interação perfeita está em suas mãos. Faça login e descubra o poder da comunicação
              inteligente.
            </span>
          </div>
        </div>

        {/* right panel box */}
        <div className="flex h-full w-full flex-col items-center">
          <div className="mt-10 flex h-auto w-9/12 flex-col">
            {/* <img src={Icon} alt="LeftPanel" className="h-8 w-8" /> */}
            <span className="mt-4 font-black text-text">Oi! Estou tão feliz em te ver por aqui.</span>
            <span className="mt-4 tracking-tighter text-text">
              Faça login através da sua chave que enviamos por e-mail. Guarde bem essa chave, pois é com ela que você
              terá acesso a todo o sistema.
            </span>
          </div>
          <div className="mt-4 flex h-auto w-9/12 flex-col">
            <span className="mt-4 tracking-tighter text-text">Chave de acesso *</span>
            <TextInput onChangeValue={handleInputChange} placeholder="xxxx-xxxx-xxxx-xxxx" value={accessKey} />
            <div className="mt-4">
              <Checkbox
                checked={remember}
                onChange={(e) => {
                  setRemember(e)
                }}
              />
            </div>
            <div className="mt-4">
              <PrimaryButton
                text="Entrar"
                onClick={() => {
                  router.push("/home")
                }}
              />
            </div>
          </div>
          <div className="mt-4 flex h-auto w-9/12 flex-col">
            <div
              className="mt-4 flex w-full justify-center text-center"
              onClick={(e) => {
                console.log("it will work")
              }}
            >
              <span className="cursor-pointer text-blue-500">Recuperar chave de acesso</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
