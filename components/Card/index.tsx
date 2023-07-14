import Image from "next/image"
import Button from "components/PrimaryButton"

const Card = ({
  title,
  text,
  buttonText,
  image,
  onClick,
}: {
  title: string
  text: string
  buttonText: string
  image: string
  onClick: () => void
}) => {
  return (
    <div className="flex flex-col items-start rounded-md bg-white p-4 shadow-md">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purpleT-terciary">
        <Image src={image} alt="icon" className="w-12" />
      </div>

      <div className="mt-4">
        <h2 className="font-montserrat font-extrabold"> {title} </h2>
        <div className="mt-2 h-1 w-16 rounded-md  bg-purpleT-primary"></div>
      </div>

      <div className="my-4 text-left">
        <span className="font-montserrat text-base tracking-tighter">{text}</span>
      </div>

      <div className="w-full">
        <Button text={buttonText} onClick={onClick} />
      </div>
    </div>
  )
}

export default Card
