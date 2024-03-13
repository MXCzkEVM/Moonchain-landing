import { linksConfig } from "@/configs/links.config";
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
import Logo from "../components/Logo";
import NavLink from "../components/NavLink";
import { Separator } from "@/components/ui/separator";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const leftNavLinks = linksConfig.navLinks.slice(
  0,
  Math.ceil(linksConfig.navLinks.length / 2)
);
const rightNavLinks = linksConfig.navLinks.slice(
  Math.ceil(linksConfig.navLinks.length / 2)
);

const HeaderSection = () => {
  return (
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
          <CustomButton variant="outline">
            <a href={linksConfig.wallet} target="_blank" rel="noreferrer">
              WALLET
            </a>
          </CustomButton>
          <CustomButton variant="primary">
            <a href={linksConfig.connect} target="_blank" rel="noreferrer">
              CONNECT
            </a>
          </CustomButton>
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
                  <CustomButton variant="outline">
                    <a
                      href={linksConfig.wallet}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WALLET
                    </a>
                  </CustomButton>
                  <CustomButton variant="primary">
                    <a
                      href={linksConfig.connect}
                      target="_blank"
                      rel="noreferrer"
                    >
                      CONNECT
                    </a>
                  </CustomButton>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

interface CustomButtonProps {
  variant?: "primary" | "outline";
  children: React.ReactNode;
}

const CustomButton = ({ variant = "primary", children }: CustomButtonProps) => {
  if (variant === "primary") {
    return (
      <Button
        size="sm"
        className="font-ddin font-semibold rounded-none px-6 animate-slide-out hover:animate-slide-in"
        asChild
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className="font-ddin font-semibold text-foreground rounded-none border-foreground bg-transparent px-6 animate-slide-out-dark hover:animate-slide-in-dark"
      asChild
    >
      {children}
    </Button>
  );
};

export default HeaderSection;
