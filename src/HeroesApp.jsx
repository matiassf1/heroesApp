import { UserProvider } from "./context/UserProvider"
import { AppRouter } from "./router/AppRouter"

export const HeroesApp = () => {
  return (
    <UserProvider>
        <AppRouter />
    </UserProvider>
  )
}
