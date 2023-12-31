import Image from "next/image";

import Logo from "/public/images/logo.svg";
import Link from "next/link";

export default function  HeroSection () {
  return(
<section  id="sobre" className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Eficiência operacional através 
        <br className="hidden lg:inline-block"/> de outsourcing em TI & automação
      </h1>
      <p className="mb-8 leading-relaxed">Aumente a eficiência operacional e concentre-se no que realmente importa para o crescimento do seu negócio com ATI SERVICES – seu parceiro confiável para soluções de terceirização de TI e automação abrangentes e personalizadas.</p>
      <div className="flex justify-center">
        <Link href="https://contate.me/atiservices" target="_blank"className="inline-flex text-white bg-red-700 hover:bg-gray-600  border-0 py-2 px-6 focus:outline-none  rounded text-lg">Ver todos os serviços</Link >
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
      alt="imagem_escritorio"
      src={Logo}
      width={720}
      height={600}/>
      {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
    </div>
  </div>
</section>
  )
}