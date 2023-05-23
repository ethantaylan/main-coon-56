import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { Socials } from './socials';

export interface Links {
  title: string;
  href: string;
}

export const Navbar = () => {
  const Links: Links[] = [
    { title: 'Accueil', href: '/' },
    { title: 'Les chats', href: '/les-chats' },
    { title: 'Prendre rendez-vous', href: '/prendre-rdv' },
    { title: 'Nos conseils', href: '/nos-conseils' },
    { title: 'Contacte', href: 'contacte' },
  ];

  return (
    <div className="flex fixed top-0 bg-white px-10 py-7 justify-between mb-10 text-neutral-600 w-full">
      <img width={170} src={Logo} alt="logo" />
      <div className="flex items-center">
        {Links.map((link, index) => (
          <NavLink
            className="px-7 last:pr-0 first:pl-0"
            key={index}
            to={link.href}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
        <Socials />
    </div>
  );
};
