import { profileData } from "../../constants/profile";
import AppCard from "../AppCard";
import Divider from "../Divider";

export default function Footer () {
  return <footer className='pt-20'>
  <Divider title='Sociais' />
  <span>Entre em contato comigo através de uma de minhas redes sociais 😄</span>
  <div className='grid max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-5 justify-items-center pt-4 gap-2'>
    {profileData.social.flatMap((e, index) => (
      <AppCard
        key={index}
        navigate={e.link}
        title={e.name}
        backgroundColor={e.bg}
      />
    ))}
  </div>
</footer>
}