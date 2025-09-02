import React from 'https://esm.sh/react@18';
import CardNav from './components/CardNav.jsx';

const NavBar = () => {
  const items = [
    {
      label: 'About',
      bgColor: 'var(--bg-elevated)',
      textColor: 'var(--text-primary)',
      links: [
        { label: 'Home', href: '#hero' },
        { label: 'Experience', href: '#experience' },
        { label: 'Education', href: '#education' }
      ]
    },
    {
      label: 'Work',
      bgColor: 'var(--bg-elevated)',
      textColor: 'var(--text-primary)',
      links: [
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' }
      ]
    },
    {
      label: 'Contact',
      bgColor: 'var(--bg-elevated)',
      textColor: 'var(--text-primary)',
      links: [
        { label: 'Get in touch', href: '#contact' }
      ]
    }
  ];

  return (
    <CardNav
      logo={"icons8-linkedin-96.png"}
      logoAlt="Logo"
      items={items}
      baseColor={'var(--bg-elevated)'}
      menuColor={'var(--text-primary)'}
      buttonBgColor={'var(--accent-solid)'}
      buttonTextColor={'var(--text-onAccent)'}
    />
  );
};

export default NavBar;
