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
import { Link } from "react-router-dom";

// 将导航链接分为主菜单项和更多菜单项
const mainNavLinks = linksConfig.navLinks.filter(link => 
  link.label === "IHO" || link.label === "Swap" || link.label === "Bridge"
);
const moreNavLinks = linksConfig.navLinks.filter(link => 
  link.label !== "IHO" && link.label !== "Swap" && link.label !== "Bridge"
);

// 将更多菜单项分为两列（如果需要）
const leftMoreLinks = moreNavLinks.slice(
  0,
  Math.ceil(moreNavLinks.length / 2)
);
const rightMoreLinks = moreNavLinks.slice(
  Math.ceil(moreNavLinks.length / 2)
);

const HeaderSection = () => {
  return (
    <div className="relative h-[100px] z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-transparent -z-10"></div>
      <div className="h-full flex items-center justify-between px-4 md:container">
        <Link to="/">
          <Logo as="h1" className="text-lg md:text-2xl" />
        </Link>
        
        {/* 桌面导航 */}
        <nav className="hidden xl:flex">
          <ul className="flex items-start space-x-4 text-sm text-foreground">
            {/* 显示主菜单项 */}
            {mainNavLinks.map((link) => (
              <li 
                key={link.label} 
                style={link.label === "IHO" ? { color: "#FFBF00" } : undefined}
              >
                <NavLink href={link.url}>
                  {link.label}
                </NavLink>
              </li>
            ))}
            
            {/* More下拉菜单 */}
            <li className="-mt-[0.5px]">
              <NavigationMenu>
                <NavigationMenuList className="p-0">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      className="text-foreground bg-transparent font-ddin uppercase font-semibold p-0 h-auto hover:bg-transparent"
                    >
                      More
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="flex items-center px-1 py-4 w-[300px]">
                        <ul className="w-2/5 space-y-1">
                          {leftMoreLinks.map((link) => (
                            <li 
                              key={link.label}
                              style={link.label === "IHO" ? { color: "#FFBF00" } : undefined}
                            >
                              <NavLink href={link.url} isMobile>
                                {link.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                        <ul className="w-3/5 space-y-1">
                          {rightMoreLinks.map((link) => (
                            <li 
                              key={link.label}
                              style={link.label === "IHO" ? { color: "#FFBF00" } : undefined}
                            >
                              <NavLink href={link.url} isMobile>
                                {link.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
          </ul>
        </nav>

        {/* 按钮区域 */}
        <div className="hidden sm:flex space-x-2">
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

        {/* 移动端菜单 */}
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
                  {/* 显示主菜单项 */}
                  {mainNavLinks.map((link) => (
                    <li 
                      key={link.label}
                      style={link.label === "IHO" ? { color: "#FFBF00" } : undefined}
                    >
                      <NavLink href={link.url} isMobile>
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                  
                  {/* 添加分隔线和More标题 */}
                  <li className="py-1">
                    <Separator className="my-1" />
                    <div className="text-sm font-medium py-1 px-3 font-ddin uppercase">
                      More
                    </div>
                  </li>
                  
                  {/* 直接显示更多菜单项 */}
                  {moreNavLinks.map((link) => (
                    <li 
                      key={link.label}
                      style={link.label === "IHO" ? { color: "#FFBF00" } : undefined}
                    >
                      <NavLink href={link.url} isMobile>
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                <Separator className="my-4" />

                <div className="grid grid-cols-2 gap-2 px-3">
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
