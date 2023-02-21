import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { Image } from '../Images/Image'
import { simpleTranslation } from '../language/LanguageContent'

const generalStylesTimeLine = {
  contentStyle:{ 
    background: 'rgb(33, 150, 243)', 
    color: '#fff' 
  },
  contentArrowStyle:{ 
    borderRight: '7px solid  rgb(33, 150, 243)' 
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
      className={`vertical-timeline-element--${type}`}
      iconClassName="bg-dark"
      date={date}
    >
      <h3 className="vertical-timeline-element-title">{simpleTranslation(title)}</h3>
      <h4 className="vertical-timeline-element-subtitle">{simpleTranslation(subtitle)}</h4>
      <p>
        {simpleTranslation(description)}
      </p>
      <div className="row mt-3">
        {images.map(image => {
          return <div className="col-auto m-2" key={`img-${image}-${subtitle}`}><Image url={image} width={"50px"} /></div>
        })}
      </div>
    </VerticalTimelineElement>
  )
}
