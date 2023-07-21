import { UserProvider } from "context/userContext"
import "../styles/tailwind.css"

import { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
