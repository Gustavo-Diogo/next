import Image from "next/image"
import { useEffect, useState } from "react"
import teasybot from "../../service/teasybot"

const QrCode = () => {
  const [image, setImage] = useState(false)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if (counter < 1) {
      getQrCode()
    } else {
      refreshQRCode()
    }
  }, [])

  const getQrCode = async () => {
    const { data } = await teasybot.get("/connect", {
      headers: {
        access_key: "wygBEc20vB&S5p",
      },
    })

    const { qrcode } = data
    setImage(qrcode)
    // refresh()
  }

  const refreshQRCode = async () => {
    const { data } = await teasybot.get("/qrcode", {
      headers: {
        access_key: "wygBEc20vB&S5p",
      },
    })

    console.log(data)
    const { qrcode } = data
    setImage(qrcode != "none" ? qrcode : "")
    setCounter(counter + 1)
  }

  return (
    <div>
      {image ? <Image src={image} alt="QRCode deve estar aqui" width={280} height={280} /> : <>Carregando...</>}
    </div>
  )
}

export default QrCode
