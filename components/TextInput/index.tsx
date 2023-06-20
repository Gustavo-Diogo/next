import { ReactEventHandler } from "react"
import Image from "next/image"

const TextInput = ({
  placeholder,
  value,
  onChangeValue,
  iconSrc,
}: {
  placeholder: string
  value: string
  onChangeValue: ReactEventHandler
  iconSrc?: string
}) => {
  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        onChange={onChangeValue}
        value={value}
        className="w-full rounded-lg border border-black bg-gray-bg p-2 pr-10"
      />
      {iconSrc && (
        <div className="absolute right-3 top-2/4 -translate-y-2/4">
          <Image src={iconSrc} alt="a" width={20} height={20} />
        </div>
      )}
    </div>
  )
}

export default TextInput
