import ConnectedMessage from "assets/connected-message.svg"
import PrimaryButton from "components/PrimaryButton"
import { SecondaryButton } from "components/SecondaryButton"
import Image from "next/image"
export const ConnectedComponent = () => {
  return (
    <div className="mb-8 flex w-full flex-col items-center justify-center">
      <div className="flex justify-between gap-8 rounded-md bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center  text-center">
          <Image src={ConnectedMessage} alt="QRCode deve estar aqui" width={200} height={266} />
        </div>
        <div className="flex w-96 flex-col items-center text-center">
          <h2 className="font-montserrat font-bold">O Teasy Bot está conectado!</h2>
          <div className="my-4 h-1 w-24 rounded-md bg-purpleT-primary"> </div>
          <span className="font-montserrat">
            Sua conexão com o Teasy Bot foi um sucesso! Agora, desfrute de todas as ferramentas e possibilidades
            incríveis que nossa plataforma oferece. Abra caminho para novas experiências e descubra um mundo de
            soluções.
          </span>

          <div className="flex w-full flex-col gap-2">
            <PrimaryButton
              disableLeft={false}
              text={"Voltar ao Início"}
              onClick={() => {
                console.log("")
              }}
            />

            <SecondaryButton
              disableLeft={false}
              text={"Desconectar Bot"}
              onClick={() => {
                console.log("")
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
