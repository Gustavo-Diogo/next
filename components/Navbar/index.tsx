import Image from "next/image"
import Icon from "../../assets/teasy-icon.svg"
import { useRouter } from "next/router"

export default function NavBar() {
  const router = useRouter()
  const verifyRoute = (path: string) => {
    if (router.pathname === path) {
      return true
    } else {
      return false
    }
  }

  const nav = [
    {
      name: "Inicio",
      path: "/home",
    },
    {
      name: "Conexão",
      path: "/connect",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Envio de Mensagem",
      path: "/send",
    },
    {
      name: "Sair",
      path: "/send",
    },
  ]

  return (
    <div className="relative z-10 flex w-full items-center justify-between bg-gray-bg p-4 shadow-md">
      <div
        className="flex cursor-pointer items-center gap-2 md:ml-24 lg:ml-40"
        onClick={() => {
          router.push("/home")
        }}
      >
        <Image src={Icon} alt="Icon" width={35} height={32} />
        <span className="font-montserrat text-xl font-black text-primary">teasy bot</span>
      </div>

      <div className="mr-10 hidden gap-10 md:flex">
        {nav.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                router.push(item.path)
              }}
              className="cursor-pointer"
            >
              <span
                className={"font-montserrat font-semibold"}
                style={{ color: verifyRoute(item.path) ? "#5900B8" : "black" }}
              >
                {item.name}
              </span>
            </div>
          )
        })}

        <div className="flex items-center justify-center">
          <div className="h-8 w-8 rounded-full bg-green-600"></div>
        </div>
      </div>
    </div>
  )
}
