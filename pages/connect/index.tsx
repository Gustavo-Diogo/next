import { useState } from "react"
import { ConnectedComponent } from "components/ConnectedComponent"
import { ConnectionComponent } from "components/ConnectionComponent"
import { MainContainer } from "components/MainContainer"

const HomePage = () => {
  const [connect, setConnect] = useState(false)

  return (
    <MainContainer>
      <div className="flex h-screen flex-col items-center justify-center bg-gray-bg">
        {connect == true ? <ConnectedComponent /> : <ConnectionComponent connect={connect} setConnect={setConnect} />}
      </div>
    </MainContainer>
  )
}

export default HomePage
