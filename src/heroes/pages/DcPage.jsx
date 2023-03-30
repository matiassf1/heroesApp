import { HeroeList } from "../components"

export const DcPage = () => {
  return (
    <>
      <h1 className="mt-2">DC Comics</h1>
      <hr />

      <HeroeList publisher={'DC Comics'} />

    </>
  )
}
