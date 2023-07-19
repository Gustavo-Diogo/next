import Image from "next/image"
import Link from "next/link"
import Email from "../../assets/email.svg"
import Github from "../../assets/github.svg"
import Instagram from "../../assets/instagram.svg"
import Linkedin from "../../assets/linkedin.svg"
import TeasyLogo from "../../assets/teasylogo.svg"
import Whatsapp from "../../assets/whatsapp.svg"
import Youtube from "../../assets/youtube.svg"

export default function Footer() {
  const websites = [
    { icon: Instagram, href: "https://www.instagram.com/teasy.solutions/" },
    { icon: Github, href: "https://github.com/teasy-solutions/" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/teasy-solutions/",
    },
    { icon: Email, href: "mailto:contact@teasy.solutions" },
    { icon: Youtube, href: "https://www.youtube.com/@TeasySolutions" },
    {
      icon: Whatsapp,
      href: "https://api.whatsapp.com/send?phone=+5548992051362&text=Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20produtos.https://www.youtube.com/@TeasySolutions",
    },
  ]

  return (
    <div className="bottom-0 left-0 w-full bg-gray-bg p-4 shadow-md">
      <div className="flex items-center justify-center gap-5">
        <Image src={TeasyLogo} alt="Icon" />

        {websites.map((website, index) => {
          const { icon, href } = website
          return (
            <Link href={href} key={index}>
              <Image src={icon} alt="Icon" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
