import Image from "next/image"
import Button from "components/PrimaryButton"

const Card = ({
  title,
  text,
  buttonText,
  image,
}: {
  title: string
  text: string
  buttonText: string
  image: string
}) => {
  return (
    <div className="flex h-80 w-80 flex-col items-start rounded-md bg-white p-4 shadow-md">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purpleT-terciary">
        <Image src={image} alt="icon" className="w-12" />
      </div>

      <div className="mt-4">
        <h2 className=""> {title} </h2>
        <div className="mt-2 h-1 w-16 rounded-md bg-purpleT-primary"></div>
      </div>

      <div className="my-4 text-left">
        <span className="text-base tracking-tighter">{text}</span>
      </div>

      <div className="w-full">
        <Button
          text={buttonText}
          onClick={() => {
            console.log(1)
          }}
        />
      </div>
    </div>
  )
}

export default Card
