import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import Checkbox from "components/Checkbox"
import LeftPanel from "components/Images/LeftPanel"
import { MainContainer } from "components/MainContainer"
import PrimaryButton from "components/PrimaryButton"
import TextInput from "components/TextInput"
// import LeftPanel from "../../assets/left-panel.svg"

const LoginPage = () => {
  const [accessKey, setAccessKey] = useState("")
  const [remember, setRemember] = useState(false)
  const router = useRouter()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setAccessKey(newValue)
  }

  return (
    <MainContainer>
      <div className="flex h-screen flex-col items-center bg-gray-bg">
        {/* white box div */}
        <div className="m-12 flex flex-col rounded-3xl bg-white shadow-xl md:flex-row">
          {/* left panel box */}
          <div className="relative w-full">
            {/* <img
            src={"left-panel.svg"}
            alt="LeftPanel"
            className="h-full w-full rounded-3xl object-cover md:rounded-r-none"
          /> */}

            <LeftPanel />

            <div className="absolute inset-x-12 bottom-0 hidden flex-col gap-1 md:flex">
              <span className="font-montserrat text-md font-bold text-purpleT-primary md:text-2xl">
                Bem-vindo ao Teasy Bot!
              </span>
              <span className="font-montserrat tracking-tighter text-text md:text-base">
                A chave para uma interação perfeita está em suas mãos. Faça login e descubra o poder da comunicação
                inteligente.
              </span>
            </div>
          </div>

          {/* right panel box */}
          <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="flex h-auto w-9/12 flex-col">
              {/* <img src={Icon} alt="LeftPanel" className="h-8 w-8" /> */}
              <span className="mt-4 font-montserrat text-lg font-bold text-text">
                Oi! Estou tão feliz em te ver por aqui.
              </span>
              <span className="mt-4 font-montserrat text-md tracking-tighter text-text">
                Faça login através da sua chave que enviamos por e-mail. Guarde bem essa chave, pois é com ela que você
                terá acesso a todo o sistema.
              </span>
            </div>
            <div className="mt-4 flex h-auto w-9/12 flex-col">
              <span className="mt-4 font-montserrat tracking-tighter text-text">Chave de acesso *</span>
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
                onClick={() => {
                  console.log("it will work")
                }}
              >
                <span className="cursor-pointer font-montserrat text-blue-500">Recuperar chave de acesso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  )
}

export default LoginPage
