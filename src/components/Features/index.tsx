import Link from "next/link";
import Ok from "../icons/Ok";

export default function Features() {
  return (
    <section className="text-gray-600  body-font">
      <div className="container  px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Recursos e benefícios</h1>
          {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> */}
        </div>
        <div className="flex flex-wrap items-center justify-center m-4">
          <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
            <h2 className="font-bold title-font tracking-widest text-gray-900 mb-4 text-base text-center sm:text-left">Características</h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              <a>
                <span className="bg-indigo-100 text-[red] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <Ok /> 
                </span>Serviços de Outsourcing em TI e Automação
              </a>
              <a>
                <span className="bg-indigo-100 text-[red] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <Ok />
                </span>Soluções completas e personalizadas para atender às necessidades do cliente
              </a>
              <a>
                <span className="bg-indigo-100 text-[red] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <Ok />
                </span>Aumento da eficiência operacional
              </a>
              <a>
                <span className="bg-indigo-100 text-[red] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <Ok />
                </span>Foco no crescimento do negócio
              </a>
              <a>
                <span className="bg-indigo-100 text-[red] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <Ok />
                </span> serviços de automação integrados
              </a>
            </nav>
          </div>



          <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
            <h2 className="font-bold title-font tracking-widest text-gray-900 mb-4 text-base text-center sm:text-left">Benefícios</h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              <a>
                <span className="bg-indigo-100 text-[red] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <Ok />
                </span>Maior eficiência operacional
              </a>
              <a>
                <span className="bg-indigo-100 text-[red] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <Ok />
                </span>Foco no crescimento do core business
              </a>
              <a>
                <span className="bg-indigo-100 text-[red] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <Ok />
                </span>Soluções completas e personalizadas de terceirização
              </a>
              <a>
                <span className="bg-indigo-100 text-[red] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <Ok />
                </span> Adaptado para atender necessidades específicas
              </a>
              <a>
                <span className="bg-indigo-100 text-[red] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <Ok />
                </span> Serviços de TI e automação prestados.
              </a>
            </nav>
          </div>
            
        </div>
        <div className="flex items-center justify-center">
        <Link href="https://contate.me/atiservices" target="__blank" className="inline-flex text-white bg-red-700 hover:bg-gray-600  border-0 py-2 px-6 focus:outline-none  rounded text-lg">Orçamento</Link>
        </div>
      </div>
      
    </section>
  )
}