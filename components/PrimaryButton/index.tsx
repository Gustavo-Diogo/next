import Image from "next/image"
import { ReactEventHandler } from "react"
import RightArrow from "../../assets/right-arrow.svg"

const PrimaryButton = ({ text, onClick }: { text: string; onClick: ReactEventHandler }) => {
  return (
    <div onClick={onClick} className="flex cursor-pointer items-center justify-center rounded-lg bg-purpleT p-1">
      <span className="text-white">{text}</span>
      <Image src={RightArrow} alt="LeftPanel" className="h-4 w-4" />
    </div>
  )
}

export default PrimaryButton
