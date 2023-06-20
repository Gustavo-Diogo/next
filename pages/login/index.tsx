import Image from "next/image"
import { ChangeEvent, useState } from "react"
import Checkbox from "components/Checkbox"
import NavBar from "components/Navbar"
import PrimaryButton from "components/PrimaryButton"
import TextInput from "components/TextInput"
import LeftPanel from "../../assets/left-panel.svg"
import Icon from "../../assets/teasy-icon.svg"

const LoginPage = () => {
  const [accessKey, setAccessKey] = useState("")
  const [remember, setRemember] = useState(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setAccessKey(newValue)
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center bg-gray-bg">
      <NavBar />

      <div className="mt-12 flex h-3/4 w-8/12 flex-row rounded-3xl shadow-xl">
        <div className="relative w-full min-w-0">
          <Image src={LeftPanel} alt="LeftPanel" className="h-full w-full rounded-l-3xl object-cover" />

          <div className="absolute inset-x-12 bottom-0 flex h-32 flex-col gap-1">
            <span className=" text-2xl font-extrabold text-purpleT">Bem-vindo ao Teasy Bot!</span>
            <span className=" font-normal tracking-tighter text-text">
              A chave para uma interação perfeita está em suas mãos. Faça login e descubra o poder da comunicação
              inteligente.
            </span>
          </div>
        </div>
        <div className="flex h-full w-full flex-col items-center">
          <div className="mt-10 flex h-auto w-9/12 flex-col">
            <Image src={Icon} alt="LeftPanel" className="h-8 w-8" />
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
                  console.log("hello")
                }}
              />
            </div>
          </div>
          <div className="mt-4 flex h-auto w-9/12 flex-col">
            <div className="mt-4 flex w-full justify-center text-center ">
              <span className=" text-blue-500">Recuperar chave de acesso</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
