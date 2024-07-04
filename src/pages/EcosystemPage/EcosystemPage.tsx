import { Separator } from "@/components/ui/separator";
import Logo from "../LandingPage/components/Logo";
import HeaderSection from "../LandingPage/sections/HeaderSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import EcosystemCircle from "./EcosystemCircle";
import Footer from "./components/Footer";
import { ecosystems } from "@/data/ecosystems";

const EcosystemPage = () => {
  return (
    <main>
      <HeaderSection />
      <section className="container py-10 md:py-20 space-y-10 md:space-y-20">
        <h1 className="flex justify-center items-center space-x-5 md:space-x-10 w-full">
          <Logo as="span" className="text-sm md:text-3xl" />
          <Separator
            orientation="vertical"
            className="border-2 h-8 border-slate-800"
          />
          <span className="text-lg md:text-4xl text-muted-foreground font-ddin">
            ECOSYSTEM
          </span>
        </h1>

        <EcosystemCircle containerClassName="w-full max-w-[800px] mx-auto" />
      </section>

      <section className="container space-y-10 pb-40">
        {ecosystems.map((ecosystem, index) => (
          <div className="space-y-6" key={index}>
            <div className="space-y-2">
              <h2 className="font-ddin text-xl md:text-2xl">
                {ecosystem.title}
              </h2>
              <p className="text-muted-foreground max-w-3xl text-sm md:text-base">
                {ecosystem.description}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {ecosystem.items.map((item, index2) => (
                <div
                  key={`${index}-${index2}`}
                  className="bg-white/10 p-3 md:p-4 space-y-4 transition-colors hover:bg-white/25"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <img
                        src={item.image.src}
                        alt={item.name}
                        className={cn(
                          "w-10 h-10 md:w-12 md:h-12",
                          item.image.rounded && "rounded-full",
                          item.image.className
                        )}
                      />
                      <h4 className="font-ddin text-base md:text-lg">
                        {item.name}
                      </h4>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-transparent text-muted-foreground"
                      asChild
                    >
                      <Link to={item.url} target="_blank">
                        <LinkIcon className="w-3 h-3" />
                      </Link>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
};

export default EcosystemPage;
