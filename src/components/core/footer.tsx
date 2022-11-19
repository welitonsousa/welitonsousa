import { toast } from "react-toastify";
import { profileData } from "../../constants/profile";
import { Social } from "../../interfaces/ISocial";
import AppCard from "../AppCard";
import Divider from "../Divider";

const handleClickSocialMedia = (social: Social) => {
  if (social.link.includes('@')) {
    navigator.clipboard.writeText(social.link)
    toast(`Email copiado para area de transferência\n${social.link}`)
  }else {
    window.open(social.link, '_blank');
  }
}


export default function Footer () {
  return <footer className='pt-20'>
  <Divider title='Sociais' />
  <span>Entre em contato comigo através de uma de minhas redes sociais 😄</span>
  <div className='grid max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-5 justify-items-center pt-4 gap-2'>
    {profileData.social.flatMap((e, index) => (
      <AppCard
        key={index}
        onClick={() => handleClickSocialMedia(e)}
        title={e.name}
        backgroundColor={e.bg}
      />
    ))}
  </div>
</footer>
}