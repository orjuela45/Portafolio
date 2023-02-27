import { Image } from "../imagesComponent/Image";
import { LanguageContent } from "../language/LanguageContent";

export const ProjectModal = ({information}) => {
  return (
    <>
    <div className="modal fade" id={`${information.id}-modal`} tabIndex={"-1"} aria-labelledby={`${information.id}-label`} aria-hidden="true">
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title me-3" id={`${information.id}-label`}>{information.name}</h3>
            {
              information.tags.map(tag =>
                <span key={`${information.name}-modal-${tag}`} className={`badge rounded-pill m-1 p-1 bg-dark`}><LanguageContent contentID={tag} /></span>
              )
            }
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body m-0 p-0">
            <div className="col-12">
              <Image url={information.image} className={'img-fluid'} alt={information.name} width={"100%"}/>
            </div>
            <div className="col-12 mt-1 p-4" style={{textAlign: "justify"}}>
              <h4 className="font-weight-bold"><LanguageContent contentID={"lbl-descriptionModal"} /></h4>
              <p><LanguageContent contentID={information.description} /></p>
              <h4 className="font-weight-bold"><LanguageContent contentID={"lbl-links"} /></h4>
              {
                information.link &&

                <div className="mt-2">
                  <Image url={'./website.png'} width={"25px"} />
                  <a target="_blank" href={information.link} className={"ms-2"}>{information.link}</a>
                </div>
              }
              <div className="mt-2">
                <Image url={'./github.png'} width={"25px"} />
                <a target="_blank" href={information.repository} className={"ms-2"}>{information.repository}</a>
              </div>
              <h4 className="font-weight-bold mt-4"><LanguageContent contentID={"lbl-technologies"} /></h4>
              <div className="row justify-content-start">
                {
                  information.technologies.map(technology => 
                    <div className="col-auto m-2 align-self-center text-center" key={`${technology.name}-modal`}>
                      <Image url={technology.icon} alt={technology.name} className={''} width={"30px"} />
                      <br />
                      <small>
                        <LanguageContent contentID={technology.name} />
                      </small>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
          <div className="modal-footer text-secondary">
            {information.integrants && information.integrants.join(", ")}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
