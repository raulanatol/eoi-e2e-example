import React, { FC, PropsWithChildren } from 'react';
import './Link.css';

type LinkProps = FC<PropsWithChildren<{
  href: string;
}>>;

export const Link: LinkProps = ({ children, href }) => {
  return <a className="Link" href={href}>{children}</a>;
};
