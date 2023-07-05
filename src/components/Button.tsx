import { InstagramLogo } from "@phosphor-icons/react";

interface ButtonProps {
  link: string;
  logo?: boolean;
  value: string;
}
export default function Button ({link, logo = false, value}: ButtonProps){
  return (
    <a className="font-bold text-[1.31rem] text-text-color-light rounded-[4px] h-12 px-8 bg-button cursor-pointer mt-8 relative left-1/2 -translate-x-1/2 inline-flex items-center transition-background duration-300 hover:bg-circle" href={link} target="_blank">
      {logo ? <InstagramLogo className="mr-1 text-text-color-light" size={24} />: null}
      {value}
    </a>
  )
}