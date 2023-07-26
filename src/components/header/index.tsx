import Image from "next/image"
import Logo from "/public/images/logo.svg"

export default function Header () {
  return(
    <header className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Image 
          className="h-20 w-20"
          src={Logo}
          alt="blog"
        />
        <span className="ml-3 text-xl">ATI SERVICE</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-[red]">Sobre</a>
        <a className="mr-5 hover:text-[red]">Serviços</a>
        <a className="mr-5 hover:text-[red]">Benefícios</a>
        <a className="mr-5 hover:text-[red]">Contato</a>
      </nav>
  
    </div>
  </header>
  )
}