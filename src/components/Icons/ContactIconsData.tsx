
import { RiAccountCircleFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsLinkedin, BsGithub} from "react-icons/bs";

// Types
type IconDataList = {
    icon: JSX.Element,
    link: string
  }
 export  const iconDataList: IconDataList[] = [
    {
      icon:  <BsGithub />,
      link: "https://github.com/StroverIT"
    },
    {
      icon:  <BsLinkedin />,
      link: "https://linkedin.com/in/emilzlatinov",
    },
    {
      icon: <MdEmail />,
      link: "mailto:emilzlatinov123@gmail.com",
    },
    {
      icon: <BsFillTelephoneFill />,
      link: "tel:+359876237725",
    }
  
  ]
  