import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Case', href: '#case-studies' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const CLIENT_LOGOS = [
  { name: 'PropNex', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/PropNex_Limited_Logo.png/1200px-PropNex_Limited_Logo.png' }, // Placeholder URL logic handled in component if broken
  { name: 'OrangeTee', url: 'https://www.orangetee.com/img/OT_Logo_Horizontal.png' }, // Placeholder
  { name: 'Era', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/ERA_Real_Estate_logo.svg/2560px-ERA_Real_Estate_logo.svg.png' }, // Placeholder
];