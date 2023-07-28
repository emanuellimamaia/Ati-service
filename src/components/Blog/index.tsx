import Image from "next/image";
import Infra from "/public/images/infra.png"
import { ArrowSvgComponent } from "../icons/Arrow";
import automação  from "public/images/automação.jpg"
import segurança  from "public/images/segurança.jpg"
import Link from "next/link";
import { AiOutlineSecurityScan } from 'react-icons/ai';
import {GoGear , GoDatabase}  from "react-icons/go";
import {GrConfigure } from "react-icons/gr";


export default function Blog () {
 return(
  <section id="serviços"className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-24 mx-auto ">
      <div className="flex flex-wrap  justify-center  s-m-4">

        <div className="p-4 md:w-1/3">
          <div className="h-full flex flex-col justify-between items-center border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={Infra} alt="blog"
            width={720}
            height={400}/> 
             <div >
                <GoDatabase className="mt-2 h-10 w-10  hover:text-red-900"/>
              </div>
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-gray-200 mb-3">Serviços de Infraestrutura de TI Personalizados</h1>
              <p className="leading-relaxed mb-3">A INFRAESTRUTRA oferece soluções integrais de infraestrutura, prestando serviços de projeto, construção e manutenção para os setores público e privado.</p>
              <div className="flex items-center flex-wrap ">
                <Link href="/" className="text-gray-200  inline-flex items-center md:mb-2 lg:mb-0">consulte Mais informação
              <ArrowSvgComponent/>
                </Link>
              </div>
              
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 flex flex-col justify-between items-center border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={automação} alt="blog"
            width={720}
            height={400}/> 
            <div >
              {/* esse é modificado na pasta icon */}
              <GoGear className=" mt-2 h-10 w-10 hover:text-red-900"></GoGear>
            </div>
            <div className="p-6">
              
              <h1 className="title-font text-lg font-medium text-gray-200 mb-3">Serviço de Automação Empresarial Eficiente</h1>
              <p className="leading-relaxed mb-3">Nosso serviço de automação corporativa é a solução ideal para otimizar e agilizar os processos de negócios, resultando em um aumento significativo da eficiência e produtividade.</p>
              <div className="flex items-center flex-wrap">
              
              <Link href="/" className="text-gray-200  inline-flex items-center md:mb-2 lg:mb-0">consulte Mais informação
              <ArrowSvgComponent/>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 flex flex-col items-center justify-between border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={segurança} alt="blog"
            width={720}
            height={400} />
            <div>
            <AiOutlineSecurityScan className=" mt-2 h-10 w-10 hover:text-red-900"/>
            </div>
            <div className="p-6">
              
              <h1 className="title-font text-lg font-medium text-gray-200 mb-3">Proteção de Dados Confidenciais e Seguros</h1>
              <p className="leading-relaxed mb-3">Nosso serviço de segurança de dados fornece o mais alto nível de proteção para suas informações valiosas,<br /> garantindo confidencialidade e tranquilidade.</p>
              <div className="flex items-center">

              <Link href="/" className="text-gray-200  inline-flex items-center md:mb-2 lg:mb-0">consulte Mais informação
              <ArrowSvgComponent/>
                </Link>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}