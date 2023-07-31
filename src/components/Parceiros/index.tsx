import Image from "next/image";
import Sonda from "/public/images/empresa/sonda.jpeg"
import am from "/public/images/empresa/3am.jpeg"
import contabilidade from "/public/images/empresa/contabilidade.jpeg"
import emsa from "/public/images/empresa/emsa.svg"
import global from "/public/images/empresa/global.svg"
import fenix from "/public/images/empresa/fenix.jpeg"
import ioam from "/public/images/empresa/iom.svg"
import mega from "/public/images/empresa/mega.jpeg"
import rb from "/public/images/empresa/rb.svg"
import vale from "/public/images/empresa/vale.jpeg"



export default function Parceiros() {
  return (

    <div className="flex flex-col lg:flex-row py-8 justify-center items-center">
      <div className="w-1/3 mb-8  font-semibold md:ml-10 max-h-40 text-4xl border-l-8 border-red-700 ">
        Clientes
      </div>
      <div className=" h-full w-auto flex flex-row ">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-row">

            <Image
              className="p-4 h-24 w-24 "

              src={Sonda}
              alt="blog" />
            <Image
              className="py-4 h-24 w-24 "
              src={rb}
              alt="blog" />
            <Image
              className="p-4 h-24 w-24 "
              src={contabilidade}
              alt="blog" />
            <Image
              className="p-4 h-24 w-24 "
              src={emsa}
              alt="blog" />
            <Image
              className="p-4 h-24 w-24 "
              src={vale}
              alt="blog" />
          </div>
          <div className="p-4 flex flex-row pt-4">
            <Image
              className="p-4  h-24 w-24 "
              src={mega}
              alt="blog" />
            <Image
              className="p-4 h-24 w-24 "
              src={fenix}
              alt="blog" />
            <Image
              className="py-4 h-24 w-24 m-0 "
              src={global}
              alt="blog" />
            <Image
              className="p-4 h-24 w-24 "
              src={ioam}
              alt="blog" />
           
                <Image
              className=" p-4 h-24 w-24 "
              src={am}
              alt="blog" />

          </div>
        </div>

      </div>
    </div>

  )
}