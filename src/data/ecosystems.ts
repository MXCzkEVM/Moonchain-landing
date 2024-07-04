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
} as const;

export const ecosystems: Ecosystem[] = [
  {
    title: "DePIN",
    description: "Lorem ipsum",
    items: [
      {
        name: "Oyster Labs",
        description: "Lorem ipsum",
        image: {
          src: ecosystemLogos["Oyster Labs"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "left-[14%] top-[17%]",
          imageClassName: "",
        },
        url: "",
      },
      {
        name: "Tailz",
        description: "Lorem ipsum",
        image: {
          src: ecosystemLogos["Tailz"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "left-[28%] top-[7%]",
          imageClassName: "",
        },
        url: "",
      },
      {
        name: "DID Phone",
        description: "Lorem ipsum",
        image: {
          src: ecosystemLogos["DID Phone"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "left-1/2 top-[3%] transform -translate-x-1/2",
          imageClassName: "",
        },
        url: "",
      },
      {
        name: "Coral Phone",
        description: "Lorem ipsum",
        image: {
          src: ecosystemLogos["Coral Phone"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "right-[28%] top-[7%]",
          imageClassName: "",
        },
        url: "",
      },
      {
        name: "APhone",
        description: "Lorem ipsum",
        image: {
          src: ecosystemLogos["APhone"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "right-[14%] top-[17%]",
          imageClassName: "",
        },
        url: "",
      },
      {
        name: "Blueberry Ring",
        description: "Lorem ipsum",
        image: {
          src: ecosystemLogos["Blueberry Ring"],
          className: "left-[20%] top-[35%]",
          rounded: false,
        },
        chart: {
          positionClassName: "left-[20%] top-[35%]",
          imageClassName: "w-16 h-16",
        },
        url: "",
      },
      {
        name: "IoTeX",
        description: "Lorem ipsum",
        image: {
          src: ecosystemLogos["IoTeX"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "left-[34%] top-[22%]",
          imageClassName: "",
        },
        url: "",
      },
      {
        name: "Drife",
        description: "Lorem ipsum",
        image: {
          src: ecosystemLogos["Drife"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "right-[32%] top-[22%]",
          imageClassName: "",
        },
        url: "",
      },
      {
        name: "Airo Networks",
        description: "Lorem ipsum",
        image: {
          src: ecosystemLogos["Airo Networks"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "right-[18%] top-1/3",
          imageClassName: "",
        },
        url: "",
      },
    ],
  },
  {
    title: "VC",
    description: "Lorem ipsum",
    items: [
      {
        name: "JDI",
        description: "Lorem ipsum",
        image: {
          src: ecosystemLogos["JDI"],
          className: "",
          rounded: false,
        },
        chart: {
          positionClassName: "right-[30%] bottom-[25%]",
          imageClassName: "",
        },
        url: "",
      },
      {
        name: "Candaq",
        description: "Lorem ipsum",
        image: {
          src: ecosystemLogos["Candaq"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "right-[22%] bottom-[15%]",
          imageClassName: "",
        },
        url: "",
      },
    ],
  },
  {
    title: "RWA",
    description: "Lorem ipsum",
    items: [
      {
        name: "Rewards Bunny",
        description: "Lorem ipsum",
        image: {
          src: ecosystemLogos["Rewards Bunny"],
          className: "",
          rounded: false,
        },
        chart: {
          positionClassName: "left-[8%] bottom-[35%]",
          imageClassName: "w-28 h-auto",
        },
        url: "",
      },
    ],
  },
  {
    title: "Infrastructure",
    description: "Lorem ipsum",
    items: [
      {
        name: "Drop Wireless",
        description: "Lorem ipsum",
        image: {
          src: ecosystemLogos["Drop Wireless"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "left-[22%] bottom-[18%]",
          imageClassName: "h-auto w-28 rounded-full",
        },
        url: "",
      },
    ],
  },
  {
    title: "Data/Tooling",
    description: "Lorem ipsum",
    items: [
      {
        name: "Public AI",
        description: "Lorem ipsum",
        image: {
          src: ecosystemLogos["Public AI"],
          className: "",
          rounded: true,
        },
        chart: {
          positionClassName: "left-1/2 bottom-[12%] transform -translate-x-1/2",
          imageClassName: "",
        },
        url: "",
      },
    ],
  },
  {
    title: "Launchpad",
    description: "Lorem ipsum",
    items: [
      {
        name: "UXUY",
        description: "Lorem ipsum",
        image: {
          src: ecosystemLogos["UXUY"],
          className: "h-6 !w-auto bg-white px-1 py-1",
          rounded: false,
        },
        chart: {
          positionClassName: "right-[10%] bottom-[37%]",
          imageClassName: "h-16 w-auto",
        },
        url: "",
      },
    ],
  },
];
