import Image from "next/image"
import Wpp from "assets/whatsapp-white.svg"

const TimeLine = () => {
  return (
    <>
      <div className="absolute z-0 ml-[23px] h-60 w-1 border-l-3 border-dashed border-purpleT-primary bg-white "></div>
      <div className="z-10 flex items-center gap-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purpleT-primary">
          <Image src={Wpp} alt={""} className="text-white" />
        </div>
        <span className="font-montserrat font-bold">Abra o seu Whatsapp no celular</span>
      </div>
      <div className="z-10 flex items-center gap-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purpleT-primary">
          <Image src={Wpp} alt={""} className="text-white" />
        </div>
        <span className="font-montserrat font-bold">Abra o seu Whatsapp no celular</span>
      </div>
      <div className="z-10 flex items-center gap-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purpleT-primary">
          <Image src={Wpp} alt={""} className="text-white" />
        </div>
        <span className="font-montserrat font-bold">Abra o seu Whatsapp no celular</span>
      </div>
      <div className="z-10 flex items-center gap-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purpleT-primary">
          <Image src={Wpp} alt={""} className="text-white" />
        </div>
        <span className="font-montserrat font-bold">Abra o seu Whatsapp no celular</span>
      </div>
    </>
  )
}

export default TimeLine
