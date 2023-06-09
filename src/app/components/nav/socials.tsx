import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

export interface Socials {
  icon: React.ReactElement;
  href: string;
}

export const Socials = () => {
  const socialsIconSize = 18;

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
      {Socials.map((social, index) => (
        <NavLink
          key={index}
          className={'mx-4 flex items-center'}
          to={social.href}
        >
          {social.icon}
        </NavLink>
      ))}
    </div>
  );
};
