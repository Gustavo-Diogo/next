import Image from "next/image"
import { useEffect, useState } from "react"
import teasybot from "../../service/teasybot"
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const QrCode = () => {
  const [image, setImage] = useState(false)
  const [connected, setConnected] = useState(false)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if (counter < 1) {
      getQrCode()
    } else {
      refreshQRCode()
    }
  }, [counter])

  const getQrCode = async () => {
    const { data } = await teasybot.get("/connect", {
      headers: {
        access_key: "wygBEc20vB&S5p",
      },
    })

    const { qrcode } = data
    setImage(qrcode)
    await sleep(65000)
    setCounter(counter + 1)
  }

  const refreshQRCode = async () => {
    const { data } = await teasybot.get("/qrcode", {
      headers: {
        access_key: "wygBEc20vB&S5p",
      },
    })
    const { qrcode, tries } = data
    setImage(qrcode != "none" ? qrcode : "")
    await sleep(18000)
    if (tries != 4 && connected == false) {
      setCounter(counter + 1)
    } else {
      const { data } = await teasybot.get("/status", {
        headers: {
          access_key: "wygBEc20vB&S5p",
        },
      })
      const { status } = data

      console.log(status)
    }
  }

  return (
    <div>
      {image ? <Image src={image} alt="QRCode deve estar aqui" width={280} height={280} /> : <>Carregando...</>}
    </div>
  )
}

export default QrCode
