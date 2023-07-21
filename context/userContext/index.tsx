"use client"
import { createContext, useState } from "react"

interface ContextProps {
  uuid: string
  name: string
  botServer: string
  amountMessages: object
  amountFailedMessages: object
  amountRequests: object
  amountSuccessfulMessages: object
  handleValues: (values: {
    uuid: string
    name: string
    botServer: string
    amountMessages: object
    amountFailedMessages: object
    amountRequests: object
    amountSuccessfulMessages: object
  }) => void
}

export const UserContext = createContext<ContextProps>({
  uuid: "",
  name: "",
  botServer: "",
  amountMessages: {},
  amountFailedMessages: {},
  amountRequests: {},
  amountSuccessfulMessages: {},
  handleValues: () => {
    console.log("initial")
  }, // Initial empty function
})

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [uuid, setUuid] = useState("")
  const [name, setName] = useState("")
  const [botServer, setBotServer] = useState("")
  const [amountFailedMessages, setAmountFailedMessages] = useState({})
  const [amountMessages, setAmountMessages] = useState({})
  const [amountRequests, setAmountRequests] = useState({})
  const [amountSuccessfulMessages, setAmountSuccessfulMessages] = useState({})

  const handleValues = ({
    uuid,
    name,
    botServer,
    amountMessages,
    amountFailedMessages,
    amountRequests,
    amountSuccessfulMessages,
  }: {
    uuid: string
    name: string
    botServer: string
    amountMessages: object
    amountFailedMessages: object
    amountRequests: object
    amountSuccessfulMessages: object
  }) => {
    setUuid(uuid)
    setName(name)
    setBotServer(botServer)
    setAmountMessages(amountMessages)
    setAmountFailedMessages(amountFailedMessages)
    setAmountRequests(amountRequests)
    setAmountSuccessfulMessages(amountSuccessfulMessages)
  }

  return (
    <UserContext.Provider
      value={{
        uuid,
        name,
        botServer,
        amountMessages,
        amountFailedMessages,
        amountRequests,
        amountSuccessfulMessages,
        handleValues,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
