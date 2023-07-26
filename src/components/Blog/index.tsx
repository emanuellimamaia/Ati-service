import Image from "next/image";
import Infra from "/public/images/infra.png"
import { ArrowSvgComponent } from "../icons/Arrow";

export default function Blog () {
 return(
  <section className="text-gray-600 bg-gray-900 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={Infra} alt="blog"
            width={720}
            height={400}/> 
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font hover:text-[red] font-medium text- mb-1">CATEGORY</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Serviços de Infraestrutura de TI Personalizados</h1>
              <p className="leading-relaxed mb-3">A INFRAESTRUTRA oferece soluções integrais de infraestrutura, prestando serviços de projeto, construção e manutenção para os setores público e privado.</p>
              <div className="flex items-center flex-wrap ">
                <a className="text-gray-200 hover:text-[red] inline-flex items-center md:mb-2 lg:mb-0">consulte Mais informação
              <ArrowSvgComponent/>
                </a>
                
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={Infra} alt="blog"
            width={720}
            height={400}/> 
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium hover:text-[red] text-gray-400 mb-1">CATEGORY</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Serviço de Automação Empresarial Eficiente</h1>
              <p className="leading-relaxed mb-3">Nosso serviço de automação corporativa agiliza e otimiza os processos de negócios, aumentando a eficiência e a produtividade.</p>
              <div className="flex items-center flex-wrap">
                <a className="text-gray-200 hover:text-[red] inline-flex items-center md:mb-2 lg:mb-0">consulte Mais informação
               <ArrowSvgComponent/>
                </a>
               
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={Infra} alt="blog"
            width={720}
            height={400} />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium hover:text-[red] text-gray-400 mb-1">CATEGORY</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Proteção de Dados Confidenciais e Seguros</h1>
              <p className="leading-relaxed mb-3">Nosso serviço de segurança de dados fornece o mais alto nível de proteção para suas informações valiosas, garantindo confidencialidade e tranquilidade.</p>
              <div className="flex items-center flex-wrap ">
                <a className="text-gray-200 hover:text-[red] inline-flex items-center md:mb-2 lg:mb-0">consulte Mais informação
                <ArrowSvgComponent/>
                </a>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}