import { Navbar } from "../../ui"
import { Route, Routes, Navigate } from "react-router-dom"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

export const HeroesRoutes = () => {
  const { user } = useContext(UserContext);
  return (
    <>
        <Navbar/>

        <div className="container">
          <Routes>
              <Route path="marvel" element={<MarvelPage />} />
              <Route path="dc" element={<DcPage />} />

              <Route path="search" element={<SearchPage />} />
              <Route path="hero/:id" element={<HeroPage />} />

              <Route path="/" element={<Navigate to="/marvel" />} />

          </Routes>
        </div>
        
    </>
  )
}
