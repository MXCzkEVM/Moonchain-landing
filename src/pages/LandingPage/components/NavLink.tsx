interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isMobile?: boolean;
}

const NavLink = ({ href, children, isMobile = false }: NavLinkProps) => {
  if (isMobile) {
    return (
      <li className="w-full font-ddin font-semibold uppercase">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="block rounded hover:bg-slate-500 px-3 py-1"
        >
          {children}
        </a>
      </li>
    );
  }

  return (
    <li className="font-ddin font-semibold uppercase">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group rounded transition duration-300 ease-in-out"
      >
        {children}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-foreground" />
      </a>
    </li>
  );
};

export default NavLink;
