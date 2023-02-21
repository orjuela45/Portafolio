import { useState } from "react";
import { VerticalTimeline} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { LanguageContent } from "../language/LanguageContent";
import { CardTimeLine } from "./CardTimeLine";

const timeLineInfo = [
  {
    type: "education",
    title: "lbl-javaCertificate-title",
    subtitle: "Universidad libre",
    description: "lbl-javaCertificate-description",
    images: [],
    dates: {
      yearInit: "2017",
      monthInit: "lbl-december",
    },
    icon: "./universidad-libre.png",
  },
  {
    type: "education",
    title: "lbl-ethicalHacking-title",
    subtitle: "Universidad libre",
    description: "lbl-ethicalHacking-description",
    images: [],
    dates: {
      yearInit: "2017",
      monthInit: "lbl-december",
    },
    icon: "./universidad-libre.png",
  },
  {
    type: "education",
    title: "lbl-fullstackCourse-title",
    subtitle: "Fedesoft",
    description: "lbl-fullstackCourse-description",
    images: [],
    dates: {
      yearInit: "2018",
      monthInit: "",
    },
    icon: "./fedesoft.png",
  },
  {
    type: "work",
    title: "lbl-apprentice-title",
    subtitle: "Ethos soluciones",
    description: "lbl-ethos-description",
    images: [
      "./oracle.png",
    ],
    dates: {
      yearInit: "2019",
      monthInit: "lbl-february",
      yearFinish: "2019",
      monthFinish: "lbl-october",
    },
    icon: "./ethos.jfif",
  },
  {
    type: "work",
    title: "lbl-fullstackRol-title",
    subtitle: "Qoopa",
    description: "lbl-qoopa-description",
    images: [
      "./html.png",
      "./css.png",
      "./js.png",
      "./php.png",
      "./mysql.png",
      "./yii2.png",
      "./github.png",
      "./jira.png",
    ],
    dates: {
      yearInit: "2019",
      monthInit: "lbl-november",
      yearFinish: "2020",
      monthFinish: "lbl-july",
    },
    icon: "./qoopa.png",
  },
  {
    type: "work",
    title: "lbl-fullstackRol-title",
    subtitle: "Laika",
    description: "lbl-laika-description",
    images: [
      "./html.png",
      "./css.png",
      "./js.png",
      "./php.png",
      "./mysql.png",
      "./laravel.png",
      "./vuejs.png",
      "./github.png",
      "./jira.png",
    ],
    dates: {
      yearInit: "2020",
      monthInit: "lbl-july",
      yearFinish: "2020",
      monthFinish: "lbl-september",
    },
    icon: "./laika.png",
  },
  {
    type: "work",
    title: "lbl-webMobileDeveloper-title",
    subtitle: "Clickonplans",
    description: "lbl-clickonplans-description",
    images: [
      "./html.png",
      "./css.png",
      "./js.png",
      "./php.png",
      "./phyton.png",
      "./mysql.png",
      "./react-native.png",
      "./aws.png",
      "./linux.png",
      "./github.png",
    ],
    dates: {
      yearInit: "2020",
      monthInit: "lbl-september",
      yearFinish: "2021",
      monthFinish: "lbl-august",
    },
    icon: "./clickonplans.png",
  },
  {
    type: "work",
    title: "lbl-fullstackRol-title",
    subtitle: "Metabiblioteca",
    description: "lbl-metabiblioteca-description",
    images: [
      "./php.png",
      "./linux.png",
      "./mysql.png",
      "./ojs.png",
    ],
    dates: {
      yearInit: "2021",
      monthInit: "lbl-august",
      yearFinish: "2022",
      monthFinish: "lbl-june",
    },
    icon: "./metabiblioteca.png",
  },
  {
    type: "education",
    title: "lbl-profession",
    subtitle: "Universidad libre",
    description: "lbl-systemsEngineer-description",
    images: [],
    dates: {
      yearInit: "2022",
      monthInit: "lbl-april",
    },
    icon: "./universidad-libre.png",
  },
  {
    type: "work",
    title: "lbl-backendDeveloper-title",
    subtitle: "Talent.com",
    description: "lbl-talent-description",
    images: [
      "./php.png",
      "./mysql.png",
      "./rabbit.png",
      "./elasticsearch.png",
      "./linux.png",
      "./github.png",
      "./jira.png",
    ],
    dates: {
      yearInit: "2021",
      monthInit: "lbl-august",
      yearFinish: "2022",
      monthFinish: "lbl-june",
    },
    icon: "./talent.png",
  },
  {
    type: "education",
    title: "lbl-solidCertification-title",
    subtitle: "Udemy",
    description: "lbl-solidCertification-description",
    images: [],
    dates: {
      yearInit: "2022",
      monthInit: "lbl-december",
    },
    icon: "./udemy.png",
  },
  {
    type: "education",
    title: "lbl-nodeCertification-title",
    subtitle: "Udemy",
    description: "lbl-nodeCertification-description",
    images: [],
    dates: {
      yearInit: "2022",
      monthInit: "lbl-december",
    },
    icon: "./udemy.png",
  },
  {
    type: "education",
    title: "lbl-typescriptCertification-title",
    subtitle: "Udemy",
    description: "lbl-typescriptCertification-description",
    images: [],
    dates: {
      yearInit: "2023",
      monthInit: "lbl-january",
    },
    icon: "./udemy.png",
  },
]

export const AcademicFormationAndExperienceSection = () => {

  const [information, setInformation] = useState(timeLineInfo)

  //todo botones para filtrar por educacion y trabajo
  const filterInformation = (filter) => {
    if (filter !== 'work' && filter !== 'education') {
      setInformation(timeLineInfo)
    } else {
      setInformation(timeLineInfo.filter(info => info.type == filter))
    }
  }

  return (
    <div>
      <h1 className="border-bottom"><LanguageContent contentID={"lbl-academicTrainingAndExperience"} /></h1>
      <VerticalTimeline className="mt-4" lineColor="black">
        {
          information.map(info => {
            return <CardTimeLine key={`card-timeline-${info.title}-${info.subtitle}`} info={info} />
          })
        }
      </VerticalTimeline>
    </div>
  );
};
