import Image from "next/image"
import Logo from "/public/images/logo.svg"
import { AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";

export default function Footer () {
  return(
<footer id="beneficios" className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row  flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image 
          className="h-20 w-20"
          src={Logo}
          alt="blog"/>
      <span className="ml-3 text-xl">ATI Service</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 ATI Service —
      <Link href="https://instagram.com/_atiservices?igshid=MzRlODBiNWFlZA==" target="_blank" className="text-gray-600 ml-1" rel="noopener noreferrer" >@_atiservices</Link>
    </p>
    <Link href="https://instagram.com/_atiservices?igshid=MzRlODBiNWFlZA==" target="_blank" className="ml-4">
    <span className="hover:bg-red-700"><AiOutlineInstagram /></span>
    </Link>
  </div>
</footer>
  )
}