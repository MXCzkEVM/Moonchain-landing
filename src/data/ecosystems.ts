import iconAiroNetworks from "@/assets/ecosystem/airo-networks.jpg";
import iconAphone from "@/assets/ecosystem/aphone.png";
import iconBlueberryRing from "@/assets/ecosystem/blueberry-ring.png";
import iconCandaq from "@/assets/ecosystem/candaq.jpg";
import iconCoralPhone from "@/assets/ecosystem/coral-phone.jpg";
import iconDidPhone from "@/assets/ecosystem/did-phone.jpg";
import iconDrife from "@/assets/ecosystem/drife.jpg";
import iconDropWireless from "@/assets/ecosystem/drop-wireless.jpg";
import iconIotex from "@/assets/ecosystem/iotex.jpg";
import iconJdi from "@/assets/ecosystem/jdi.png";
import iconOysterLabs from "@/assets/ecosystem/oyster-labs.jpg";
import iconPublicAi from "@/assets/ecosystem/public-ai.png";
import iconRewardsBunny from "@/assets/ecosystem/rewards-bunny.png";
import iconTailz from "@/assets/ecosystem/tailz.jpg";
import iconUxuy from "@/assets/ecosystem/uxuy.png";
import iconChargepal from "@/assets/ecosystem/Chargepal.png";
import iconCyberCharge from "@/assets/ecosystem/CyberCharge.svg";
import iconDekube from "@/assets/ecosystem/Dekube.png";
import iconKaisar from "@/assets/ecosystem/Kaisar.png";
import iconWatchX from "@/assets/ecosystem/WatchX.png";
import iconBitget from "@/assets/ecosystem/Bitget.svg";

interface EcosystemItem {
  name: string;
  description: string;
  // Image related properties of the ecosystem item.
  image: {
    // The source URL of the image.
    src: string;
    // Indicates whether the image has rounded corners
    rounded: boolean;
    // Additional CSS classes to apply to the image for list page.
    className: string;
  };
  // Chart related properties of the ecosystem circle.
  chart: {
    // CSS classes to position the item.
    positionClassName: string;
    // Additional CSS classes to apply to the chart image
    imageClassName: string;
  };
  // The URL link related to the ecosystem item.
  url: string;
}

interface Ecosystem {
  title: string;
  description: string;
  items: EcosystemItem[];
}

export const ecosystemLogos = {
  "Oyster Labs": iconOysterLabs,
  Tailz: iconTailz,
  "DID Phone": iconDidPhone,
  "Coral Phone": iconCoralPhone,
  APhone: iconAphone,
  "Blueberry Ring": iconBlueberryRing,
  IoTeX: iconIotex,
  Drife: iconDrife,
  "Airo Networks": iconAiroNetworks,
  JDI: iconJdi,
  Candaq: iconCandaq,
  "Rewards Bunny": iconRewardsBunny,
  "Drop Wireless": iconDropWireless,
  "Public AI": iconPublicAi,
  UXUY: iconUxuy,
  CyberCharge: iconCyberCharge,
  Dekube: iconDekube,
  Kaisar: iconKaisar,
  WatchX: iconWatchX,
  Bitget: iconBitget,
  Chargepal: iconChargepal,
} as const;

export const ecosystems: Ecosystem[] = [
  {
    title: "DePIN",
    description: "Making hardware great again!",
    items: [
      {
        name: "Oyster Labs",
        description: "Selling Web3 phones",
        image: {
          src: ecosystemLogos["Oyster Labs"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "left-[14%] top-[17%]",
          imageClassName: "",
        },
        url: "https://twitter.com/oysterecosystem",
      },
      {
        name: "Tailz",
        description: "Web3 DePIN Pet trackers",
        image: {
          src: ecosystemLogos["Tailz"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "left-[28%] top-[7%]",
          imageClassName: "https://twitter.com/tailz_xyz",
        },
        url: "https://twitter.com/tailz_xyz",
      },
      {
        name: "DID Phone",
        description: "Delivery guy's first Web3 phone",
        image: {
          src: ecosystemLogos["DID Phone"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "left-1/2 top-[3%] transform -translate-x-1/2",
          imageClassName: "https://twitter.com/DidDiscovery",
        },
        url: "https://twitter.com/DidDiscovery",
      },
      {
        name: "Coral Phone",
        description: "DePIN phones at hands",
        image: {
          src: ecosystemLogos["Coral Phone"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "right-[28%] top-[7%]",
          imageClassName: "",
        },
        url: "https://twitter.com/MyCoralApp",
      },
      {
        name: "APhone",
        description: "Decentralized Could Smart Phone",
        image: {
          src: ecosystemLogos["APhone"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "right-[14%] top-[17%]",
          imageClassName: "",
        },
        url: "https://twitter.com/aphonelabs",
      },
      {
        name: "Blueberry Ring",
        description: "Lord of Web3 Ring",
        image: {
          src: ecosystemLogos["Blueberry Ring"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "left-[20%] top-[35%]",
          imageClassName: "w-16 h-16",
        },
        url: "https://twitter.com/BlueberryRing",
      },
      {
        name: "IoTeX",
        description: "DePin Layer1",
        image: {
          src: ecosystemLogos["IoTeX"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "left-[34%] top-[22%]",
          imageClassName: "",
        },
        url: "https://twitter.com/iotex_io",
      },
      {
        name: "Drife",
        description: "Web3 Uber",
        image: {
          src: ecosystemLogos["Drife"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "right-[32%] top-[22%]",
          imageClassName: "",
        },
        url: "https://twitter.com/Drife_official",
      },
      {
        name: "Airo Networks",
        description: "Worlds largest Air Quality Network",
        image: {
          src: ecosystemLogos["Airo Networks"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "right-[18%] top-1/3",
          imageClassName: "",
        },
        url: "https://twitter.com/airosystems",
      },
      {
        name: "WatchX Network",
        description: "Worlds largest Air Quality Network",
        image: {
          src: ecosystemLogos["WatchX"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "",
          imageClassName: "",
        },
        url: "https://x.com/watchxnetwork",
      },
      {
        name: "CyberCharge",
        description: "Next-Gen Global Power Matching Protocol",
        image: {
          src: ecosystemLogos["CyberCharge"],
          className: "ecosystem-logo",
          rounded: false,
        },
        chart: {
          positionClassName: "",
          imageClassName: "",
        },
        url: "https://x.com/CyberChargeWeb3",
      },
      {
        name: "Chargepal",
        description: "The First-ever Decentralized Power Bank protocol",
        image: {
          src: ecosystemLogos["Chargepal"],
          className: "ecosystem-logo",
          rounded: false,
        },
        chart: {
          positionClassName: "",
          imageClassName: "",
        },
        url: "https://x.com/Chargepalweb3",
      },
    ],
  },
  {
    title: "VC",
    description: "DePIN focused Venture Capitals",
    items: [
      {
        name: "JDI",
        description: "The largest investor behind Dimo and Helium",
        image: {
          src: ecosystemLogos["JDI"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "right-[30%] bottom-[25%]",
          imageClassName: "",
        },
        url: "https://twitter.com/Global_JDI",
      },
      {
        name: "Candaq",
        description: "Started from 2012, invested in a lot of DePIN projects",
        image: {
          src: ecosystemLogos["Candaq"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "right-[22%] bottom-[15%]",
          imageClassName: "",
        },
        url: "https://twitter.com/CandaqCom",
      },
    ],
  },
  {
    title: "RWA",
    description: "Real World Assets",
    items: [
      {
        name: "Rewards Bunny",
        description: "Platforms for the RWA",
        image: {
          src: ecosystemLogos["Rewards Bunny"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "left-[8%] bottom-[35%]",
          imageClassName: "w-28 h-auto",
        },
        url: "https://twitter.com/rewardsbunny",
      },
    ],
  },
  {
    title: "Infrastructure",
    description: "DePIN infrastructure ",
    items: [
      {
        name: "Drop Wireless",
        description: "Wireless networks for DePIN",
        image: {
          src: ecosystemLogos["Drop Wireless"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "left-[22%] bottom-[18%]",
          imageClassName: "h-auto w-28 rounded-full",
        },
        url: "https://twitter.com/dropwireless",
      },
      {
        name: "Dekube Network",
        description: "Build The World's Largest Distributed AI Computing Network",
        image: {
          src: ecosystemLogos["Dekube"],
          className: "",
          rounded: false,
        },
        chart: {
          positionClassName: "",
          imageClassName: "",
        },
        url: "https://x.com/dekube_official",
      },
      {
        name: "Kaisar Network",
        description: "The leading GPU-as-a-service protocol",
        image: {
          src: ecosystemLogos["Kaisar"],
          className: "",
          rounded: false,
        },
        chart: {
          positionClassName: "",
          imageClassName: "",
        },
        url: "https://x.com/KaisarNetwork",
      },
    ],
  },
  {
    title: "Data/Tooling",
    description: "DePIN data tools",
    items: [
      {
        name: "Public AI",
        description: "AI for DePIN",
        image: {
          src: ecosystemLogos["Public AI"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "left-1/2 bottom-[12%] transform -translate-x-1/2",
          imageClassName: "",
        },
        url: "https://twitter.com/PublicAI_",
      },
    ],
  },
  {
    title: "Launchpad",
    description: "DePIN launch platforms",
    items: [
      {
        name: "UXUY",
        description: "Web3 DePIN launchpad and wallet",
        image: {
          src: ecosystemLogos["UXUY"],
          className: "",
          rounded: false,
        },
        chart: {
          positionClassName: "right-[10%] bottom-[37%]",
          imageClassName: "h-16 w-auto",
        },
        url: "https://twitter.com/uxuycom",
      },
    ],
  },
  {
    title: "Exchange",
    description: "Partner Moonchain Exchanges",
    items: [
      {
        name: "Bitget Global",
        description: "World's leading cryptocurrency exchange and web3 company.",
        image: {
          src: ecosystemLogos["Bitget"],
          className: "ecosystem-logo",
          rounded: false,
        },
        chart: {
          positionClassName: "",
          imageClassName: "",
        },
        url: "https://x.com/bitgetglobal",
      },
    ],
  },
];
