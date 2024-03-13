import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { linksConfig } from "@/configs/links.config";
import "./styles/moon.css";
import "./styles/stars.css";

const leftNavLinks = linksConfig.navLinks.slice(
  0,
  Math.ceil(linksConfig.navLinks.length / 2)
);
const rightNavLinks = linksConfig.navLinks.slice(
  Math.ceil(linksConfig.navLinks.length / 2)
);

const LandingPage = () => {
  return (
    <div className="relative h-dvh flex flex-col overflow-hidden">
      <div className="stars"></div>
      <div className="twinkling"></div>

      <div className="relative container">
        <div className="absolute animated-moon w-[700px] h-[700px] -right-80 -top-14 sm:w-[750px] sm:h-[750px] sm:-right-52 sm:-top-20 lg:w-[800px] lg:h-[800px] lg:-right-52 lg:-top-20 xl:w-[1000px] xl:h-[1000px] xl:-right-60 xl:-top-40"></div>
      </div>

      <div className="relative h-[100px] z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-transparent -z-10"></div>
        <div className="h-full flex items-center justify-between px-4 md:container">
          <div>
            <Logo as="h1" className="text-lg md:text-2xl" />
          </div>
          <nav className="hidden xl:flex">
            <ul className="flex space-x-4 text-sm text-foreground">
              {linksConfig.navLinks.map((link) => (
                <NavLink key={link.label} href={link.url}>
                  {link.label}
                </NavLink>
              ))}
            </ul>
          </nav>
          <div className="hidden sm:flex space-x-2">
            <NavigationMenu className="xl:hidden">
              <NavigationMenuList>
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="text-foreground bg-transparent">
                    zkEVM
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex items-center px-1 py-4 w-[300px]">
                      <ul className="w-2/5 space-y-1">
                        {leftNavLinks.map((link) => (
                          <NavLink key={link.label} href={link.url} isMobile>
                            {link.label}
                          </NavLink>
                        ))}
                      </ul>
                      <ul className="w-3/5 space-y-1">
                        {rightNavLinks.map((link) => (
                          <NavLink key={link.label} href={link.url} isMobile>
                            {link.label}
                          </NavLink>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              variant="outline"
              size="sm"
              className="font-ddin font-semibold text-foreground rounded-none border-foreground bg-transparent px-6 animate-slide-out-dark hover:animate-slide-in-dark"
              asChild
            >
              <a href={linksConfig.docs} target="_blank" rel="noreferrer">
                DOCS
              </a>
            </Button>
            <Button
              size="sm"
              className="font-ddin font-semibold rounded-none px-6 animate-slide-out hover:animate-slide-in"
              asChild
            >
              <a href={linksConfig.connect} target="_blank" rel="noreferrer">
                CONNECT
              </a>
            </Button>
          </div>
          <div className="flex sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="text-foreground border-foreground rounded-none"
                >
                  <MenuIcon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="max-w-xs dark:bg-slate-900 px-2">
                <SheetHeader>
                  <SheetTitle className="text-center">zkEVM</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <ul className="w-full space-y-1 text-left">
                    {linksConfig.navLinks.map((link) => (
                      <NavLink key={link.label} href={link.url} isMobile>
                        {link.label}
                      </NavLink>
                    ))}
                  </ul>

                  <Separator className="my-4" />

                  <div className="grid grid-cols-2 gap-2 px-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-ddin font-semibold text-foreground rounded-none border-foreground bg-transparent px-6 animate-slide-out-dark hover:animate-slide-in-dark"
                      asChild
                    >
                      <a
                        href={linksConfig.docs}
                        target="_blank"
                        rel="noreferrer"
                      >
                        DOCS
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="font-ddin font-semibold rounded-none px-6 animate-slide-out hover:animate-slide-in"
                      asChild
                    >
                      <a
                        href={linksConfig.connect}
                        target="_blank"
                        rel="noreferrer"
                      >
                        CONNECT
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div className="grow">
        <div className="h-full flex flex-col justify-end space-y-12 py-12 sm:py-24 md:py-32 px-4 md:container">
          <div className="space-y-3">
            <Logo
              as="h5"
              className="animate__animated animate__fadeInUp delay-50 text-foreground text-xs md:text-sm"
            />
            <h1 className="animate__animated animate__fadeInUp delay-100 font-ddin font-semibold text-foreground max-w-lg uppercase text-4xl md:text-5xl">
              Ethereum’s largest AI+DePIN chain
            </h1>
          </div>
          <div className="animate__animated animate__fadeInUp delay-100 flex items-center space-x-4">
            <div className="animate__animated animate__fadeInUp delay-100">
              <Button
                className="font-ddin font-semibold border-foreground border-2 rounded-none animate-slide-out hover:animate-slide-in px-6 py-6 md:px-8 md:py-6"
                asChild
              >
                <a href={linksConfig.connect} target="_blank" rel="noreferrer">
                  CONNECT
                </a>
              </Button>
            </div>
            <div className="animate__animated animate__fadeInUp delay-200">
              <Button
                variant="outline"
                className="font-ddin font-semibold text-foreground border-foreground border-2 bg-transparent rounded-none animate-slide-out-dark hover:animate-slide-in-dark px-6 py-6 md:px-8 md:py-6"
                asChild
              >
                <a href={linksConfig.docs} target="_blank" rel="noreferrer">
                  DOCS
                </a>
              </Button>
            </div>
            <div className="animate__animated animate__fadeInUp delay-300">
              <Button
                variant="outline"
                className="font-ddin font-semibold text-foreground border-foreground border-2 bg-transparent rounded-none animate-slide-out-dark hover:animate-slide-in-dark px-6 py-6 md:px-8 md:py-6"
                asChild
              >
                <a href={linksConfig.wallet} target="_blank" rel="noreferrer">
                  WALLET
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
        className="group rounded transition duration-300 ease-in-out"
      >
        {children}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-foreground" />
      </a>
    </li>
  );
};

export default LandingPage;
