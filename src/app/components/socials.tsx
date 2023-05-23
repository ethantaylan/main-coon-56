import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

export interface Socials {
  icon: React.ReactElement;
  href: string;
}

export const Socials = () => {
  const Socials: Socials[] = [
    {
      icon: <BsFacebook size={20} />,
      href: '/facebook',
    },
    {
      icon: <BsInstagram size={20} />,
      href: '/instagram',
    },
  ];

  return (
    <div className="flex">
      {Socials.map((social) => (
        <NavLink className={'mx-2'} to={social.href}>
          {social.icon}
        </NavLink>
      ))}
    </div>
  );
};
