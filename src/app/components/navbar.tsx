import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png'

export interface Links {
  title: string;
  href: string;
}

export const Navbar = () => {
  const Links: Links[] = [
    { title: 'Accueil', href: '/' },
    { title: 'Les chats', href: 'les-chats' },
    { title: 'Prendre rendez-vous', href: 'les-chats' },
    { title: 'Nos conseils', href: 'contacte' },
    { title: 'Contacte', href: 'contacte' },
  ];

  return (
    <div className="flex justify-between mb-10 text-neutral-600 w-full">
      <img width={200} src={Logo} alt='logo' />
      <div>
        {Links.map((link, index) => (
          <NavLink
            className="px-7 last:pr-0 first:pl-0 font-semibold"
            key={index}
            to={link.href}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
