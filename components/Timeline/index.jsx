import Image from "next/image"
import Wpp from "assets/whatsapp-white.svg"
import Click from "assets/click-icon.svg"
import Share from "assets/share-icon.svg"
import QrScan from "assets/qr-scan-icon.svg"

const TimeLine = () => {
  return (
    <>
      <div className="absolute z-0 ml-[23px] h-64 w-1 border-l-2 border-dashed border-purpleT-primary bg-white "></div>
      <div className="z-10 flex items-center gap-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purpleT-primary">
          <Image src={Wpp} alt={""} className="text-white" />
        </div>
        <span className="font-montserrat font-bold">Abra o seu Whatsapp no celular</span>
      </div>
      <div className="z-10 flex items-center gap-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purpleT-primary">
          <Image src={Click} alt={""} className="text-white" />
        </div>
        <span className="font-montserrat font-bold">
          Toque no menu ou em configurações, selecione os aparelhos conectados
        </span>
      </div>
      <div className="z-10 flex items-center gap-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purpleT-primary">
          <Image src={Share} alt={""} className="text-white" />
        </div>
        <span className="font-montserrat font-bold ">Toque em conectar dispositivos</span>
      </div>
      <div className="z-10 flex items-center gap-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purpleT-primary">
          <Image src={QrScan} alt={""} className="text-white" />
        </div>
        <span className="font-montserrat font-bold">
          Aponte seu telefone para o QR code ao lado e a sua conexão será feita.
        </span>
      </div>
    </>
  )
}

export default TimeLine
