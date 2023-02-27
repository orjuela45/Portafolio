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

export const CardTimeLine = ({info}) => {
  const {icon, title, type, dates, subtitle, description, images = []} = info;
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
    </VerticalTimelineElement>
  )
}
