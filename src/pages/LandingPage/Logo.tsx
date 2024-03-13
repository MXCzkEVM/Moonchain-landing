interface LogoProps<T extends React.ElementType = "div"> {
  className?: string;
  as?: T;
}

function Logo<T extends React.ElementType = "div">({
  className,
  as,
  ...props
}: LogoProps<T> & Omit<React.ComponentProps<T>, keyof LogoProps>) {
  const Component = as || "div";
  return (
    <Component
      className={`text-foreground font-spacex tracking-wider ${
        className || ""
      }`}
      {...props}
    >
      MOONCHAIN
    </Component>
  );
}

export default Logo;
