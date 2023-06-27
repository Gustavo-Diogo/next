import Image from "next/image"
import Icon from "../../assets/teasy-icon.svg"

export default function Footer() {
  return (
    <div className="relative z-10 block w-full bg-gray-bg p-4 shadow-md">
      <div className="flex items-center gap-2 md:ml-24 lg:ml-40">
        <Image src={Icon} alt="Icon" width={35} height={32} />
        <span className="text-xl font-bold text-primary">teasy bot</span>
      </div>
    </div>
  )
}
