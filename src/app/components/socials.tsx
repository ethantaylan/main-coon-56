import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

export interface Socials {
  icon: React.ReactElement;
  href: string;
}

export const Socials = () => {

  const socialsIconSize: number = 18;
  
  const Socials: Socials[] = [
    {
      icon: <BsFacebook size={socialsIconSize} />,
      href: '/facebook',
    },
    {
      icon: <BsInstagram size={socialsIconSize} />,
      href: '/instagram',
    },
  ];

  return (
    <div className="flex">
      {Socials.map((social) => (
        <NavLink className={'mx-2 flex items-center'} to={social.href}>
          {social.icon}
        </NavLink>
      ))}
    </div>
  );
};
