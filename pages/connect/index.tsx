import Footer from "components/Footer"
import NavBar from "components/Navbar"
import QrCode from "components/QrCode"
import TimeLine from "components/Timeline/"

const HomePage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-gray-bg">
      <NavBar />

      <div className="mb-8 flex h-screen w-screen flex-col items-center justify-center">
        <div className="w-10/12 rounded-md bg-white pt-4 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-montserrat font-bold">Siga o passo a passo para fazer a conexão com seu Whatsapp</h2>
            <div className="my-4 h-1 w-24 rounded-md bg-purpleT-primary"> </div>
          </div>

          <div className=" flex w-full  pb-6 ">
            <div className=" flex w-9/12 flex-col gap-6 border-r-2 p-8">
              <div className="absolute z-0 ml-[23px] h-60 w-1 border-l-3 border-dashed border-purpleT-primary bg-white "></div>
              <TimeLine />
            </div>
            <div className="mx-4 flex w-2/5 items-center justify-center">
              <QrCode />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage
