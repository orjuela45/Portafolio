import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { Image } from '../imagesComponent/Image'
import { simpleTranslation } from '../language/LanguageContent'

const generalStylesTimeLine = {
  contentStyle:{ 
    background: '#292b2c', 
    color: '#fff' 
  },
  contentArrowStyle:{ 
    borderRight: '10px solid #292b2c' 
  },
}

export const CardTimeLine = ({info, onViewDetails}) => {
  const {icon, title, type, dates, subtitle, description, images = [], imagesCarrousel = []} = info;
  const {yearInit, monthInit, yearFinish, monthFinish} = !!dates && dates;

  let date = `${yearInit} ${simpleTranslation(monthInit)}`;

  if (yearFinish) date += ` - ${yearFinish} ${simpleTranslation(monthFinish)}`

  return (
    <VerticalTimelineElement
      {...generalStylesTimeLine}
      icon={<Image url={icon} />}
      key={`timeline-${title}-${subtitle}`}
      className={`col-auto`}
      iconClassName="bg-dark"
      dateClassName='text-secondary'
      date={date}
    >
      <h3 className="text-uppercase">{simpleTranslation(title)}</h3>
<h4>{simpleTranslation(subtitle)}</h4>
      <p>
        {simpleTranslation(description)}
      </p>
      <div className="row mt-3">
        {images.map(image => {
          return <div className="col-auto m-1" key={`img-${image}-${subtitle}`}><Image url={image} width={"50px"} className={''}/></div>
        })}
      </div>
      {imagesCarrousel && imagesCarrousel.length > 0 && (
        <div className="row mt-3">
          <div className="col-12">
            <button 
              className="btn btn-eye btn-sm"
              onClick={() => onViewDetails(info)}
              title="Ver imágenes del proyecto"
            >
              <i className="bi bi-eye me-2"></i>
              Ver detalles
            </button>
            
            {/* Opción 2: Estilo Glassmorphism - Descomentar para usar */}
            {/* <button 
              className="btn btn-eye-glass btn-sm ms-2"
              onClick={() => onViewDetails(info)}
              title="Ver imágenes del proyecto"
            >
              <i className="bi bi-image me-2"></i>
              Galería
            </button> */}
            
            {/* Opción 3: Estilo Neon - Descomentar para usar */}
            {/* <button 
              className="btn btn-eye-neon btn-sm"
              onClick={() => onViewDetails(info)}
              title="Ver imágenes del proyecto"
            >
              <i className="bi bi-camera me-2"></i>
              Explorar
            </button> */}
          </div>
        </div>
      )}
    </VerticalTimelineElement>
  )
}
