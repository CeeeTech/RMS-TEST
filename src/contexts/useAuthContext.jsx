import { JWTContext } from "../contexts/JWTContext"
import { useContext } from "react"

export const useAuthContext = () => {
  const context = useContext(JWTContext)

  if(!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }

  return context
}