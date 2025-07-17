import { linksConfig } from "@/configs/links.config";
import Logo from "../components/Logo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <div className="grow">
      <div className="h-full flex items-end justify-start py-12 sm:py-24 md:py-32 px-4 md:container">
        <div className="space-y-12">
        <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Logo
                as="h5"
                className="animate__animated animate__fadeInUp delay-50 text-foreground text-xs md:text-sm inline-block"
              />
              <span className="animate__animated animate__fadeInUp delay-50 text-foreground text-xs md:text-sm">
                | Ethereum 3.0
              </span>
            </div>
            <div></div>
            <h1 className="animate__animated animate__fadeInUp delay-100 font-ddin font-semibold text-foreground max-w-lg text-4xl md:text-5xl inline-block">
              {/* Ethereum’s largest AI+DePIN chain */}
              ETHEREUM’S FIRST HARDWARE CHAIN {" "}
              <Link
                to="https://l2beat.com/scaling/projects/mxc"
                target="_blank"
                className="hover:underline text-base align-top"
              >
                [1]
              </Link>
            </h1>
          </div>
          <div className="animate__animated animate__fadeInUp delay-100 space-x-4 inline-block">
            <div className="animate__animated animate__fadeInUp delay-100 inline-block">
              <CustomButton variant="primary">
                <a href={linksConfig.connect} target="_blank" rel="noreferrer">
                  GITHUB
                </a>
              </CustomButton>
            </div>
            <div className="animate__animated animate__fadeInUp delay-200 inline-block">
              <CustomButton variant="outline">
                <a href={linksConfig.docs} target="_blank" rel="noreferrer">
                  DOCS
                </a>
              </CustomButton>
            </div>
            <div className="animate__animated animate__fadeInUp delay-300 inline-block">
              <CustomButton variant="outline">
                <a href={linksConfig.wallet} target="_blank" rel="noreferrer">
                  WALLET
                </a>
              </CustomButton>
            </div>
          </div>
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
        className="font-ddin font-semibold border-foreground border-2 rounded-none animate-slide-out hover:animate-slide-in px-6 py-6 md:px-8 md:py-6"
        asChild
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      className="font-ddin font-semibold text-foreground border-foreground border-2 bg-transparent rounded-none animate-slide-out-dark hover:animate-slide-in-dark px-6 py-6 md:px-8 md:py-6"
      asChild
    >
      {children}
    </Button>
  );
};

export default MainSection;
