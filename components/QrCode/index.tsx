import Image from "next/image"
import { useEffect, useState } from "react"
import teasybot from "../../service/teasybot"
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const QrCode = ({ connect, setConnect }: { connect: any; setConnect: any }) => {
  const [image, setImage] = useState("")
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

    const { qrcode, tries, status, connected } = data

    if (connected) {
      setConnect(connected)
    }
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
    const { qrcode, tries, status } = data

    if (status == "successChat") {
      setConnect(true)
    }

    setImage(qrcode != "none" ? qrcode : "")
    await sleep(18000)
    if (tries != 4 && connect == false) {
      setCounter(counter + 1)
    } else {
      const { data } = await teasybot.get("/status", {
        headers: {
          access_key: "wygBEc20vB&S5p",
        },
      })
      const { connected } = data

      setConnect(connected)
    }
  }

  return (
    <div>
      {image ? <Image src={image} alt="QRCode deve estar aqui" width={280} height={280} /> : <>Carregando...</>}
    </div>
  )
}

export default QrCode
