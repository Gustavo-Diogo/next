import Image from "next/image"
import { ReactEventHandler } from "react"
import RightArrow from "../../assets/right-arrow.svg"

const PrimaryButton = ({
  text,
  onClick,
  disableLeft,
}: {
  text: string
  onClick: ReactEventHandler
  disableLeft?: boolean
}) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer items-center justify-center rounded-lg bg-purpleT-primary p-1"
    >
      <span className="font-montserrat font-semibold text-white">{text}</span>
      {disableLeft != false ? <Image src={RightArrow} alt="LeftPanel" className="h-4 w-4" /> : <></>}
    </div>
  )
}

export default PrimaryButton
