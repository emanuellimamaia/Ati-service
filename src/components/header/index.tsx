import Image from "next/image"
import Logo from "/public/images/logo.svg"
import Link from "next/link"

export default function Header () {
  return(
    <header className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
     <Link href="/" className="flex title-font w-72 font-medium items-center text-white mb-4 md:mb-0">
          <Image 
          className="h-20 w-20"
          src={Logo}
          alt="blog"
        />
        <span className="ml-3 text-xl">ATI SERVICE</span>
      </Link>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
       <Link scroll href="#sobre" className="mr-5 hover:text-gray-200 transition-all">Sobre</Link>
       <Link scroll href="#serviços" className="mr-5 hover:text-gray-200 transition-all">Serviços</Link>
       <Link scroll href="#beneficios" className="mr-5 hover:text-gray-200 transition-all">Benefícios</Link>
       <Link scroll href="#beneficios" className="mr-5 hover:text-gray-200 transition-all">Contato</Link>
      </nav>
  
      <div className="w-72">
        
       
        
      </div>
    </div>
  </header>
  )
}