import { Image } from "./Image"
import { Presentation } from "./Presentation"

const urlImage = '/perfil.jpeg'

export const WelcomePanel = () => {
  return (
    <div className="container-fluid p-2 bg-dark">
      <div className="row justify-content-center justify-content-xl-around">
        <div className="col-7 col-xl-3 p-3">
          <Presentation />
        </div>
        <div className="col-4 col-xl-5 p-3 text-center">
          <Image url={urlImage} />
        </div>
      </div>
    </div>
  )
}
