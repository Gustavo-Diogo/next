import Card from "components/Card"
import NavBar from "components/Navbar"
import dashboard from "../../assets/dashboard.svg"
import message from "../../assets/message.svg"
import qrcode from "../../assets/qrcode.svg"

const cards = [
  {
    buttonText: "Quero Conectar",
    text: "Faça a conexão via QR-Code e ative o sistema ao seu dispositivo móvel. Siga o passo-a-passo",
    title: "Fazer Conexão",
    image: qrcode,
  },
  {
    title: "Dashboard",
    buttonText: "Abrir Painel de Controle",
    text: "Acesse nosso painel de controle para monitorar o desempenho de suas campanhas tomada de decisões.",
    image: dashboard,
  },
  {
    title: "Enviar mensagens",
    buttonText: "Abrir Envio de Mensagens",
    text: "Automatize respostas, crie mensagens personalizadas e agende envios para uma comunicação eficiente.",
    image: message,
  },
]

const LoginPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-gray-bg">
      <NavBar />
      <div className="mt-6 flex h-40 w-3/4 flex-col items-center text-center text-lg">
        <div className="flex flex-col items-center">
          <h1 className=" font-black">
            Bem-vindo {"enterprise"}, aproveite o máximo da nossa plataforma para gerencias as suas mensagens de forma
            descomplicada!
          </h1>
          <div className="mt-4 h-1 w-24 rounded-md bg-purpleT-primary"> </div>
        </div>

        <div className="mt-6 flex grid-rows-3 gap-4">
          {cards.map((card, index) => {
            const { buttonText, text, title, image } = card
            return <Card key={index} buttonText={buttonText} text={text} title={title} image={image} />
          })}
        </div>
      </div>
    </div>
  )
}

export default LoginPage
