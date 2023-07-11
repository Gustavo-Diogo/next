import Card from "components/Card"
import Footer from "components/Footer"
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

const HomePage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-gray-bg">
      <NavBar />
      <div className="my-6 flex h-auto w-3/4 flex-col items-center text-center">
        <div className="flex flex-col items-center">
          <h1 className="font-montserrat text-lg font-bold">
            Bem-vindo {"enterprise"}, aproveite o máximo da nossa plataforma para gerencias as suas mensagens de forma
            descomplicada!
          </h1>
          <div className="mt-4 h-1 w-24 rounded-md bg-purpleT-primary"> </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 sm:grid-rows-1 md:grid-rows-3">
        {cards.map((card, index) => {
          const { buttonText, text, title, image } = card
          return <Card key={index} buttonText={buttonText} text={text} title={title} image={image} />
        })}
      </div>
      <div className="mt-60">
        <span className="font-montserrat text-gray-300">Chave de acesso: 129381283182</span>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
