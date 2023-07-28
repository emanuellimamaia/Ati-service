import Image from "next/image";
import Logo from "/public/images/logo.svg"
import Sonda from "/public/images/empresa/sonda.jpeg"
import am from "/public/images/empresa/3am.jpeg"
import contabilidade from "/public/images/empresa/contabilidade.jpeg"
import emsa from "/public/images/empresa/emsa.jpeg"
import global from "/public/images/empresa/global.jpeg"
import fenix from "/public/images/empresa/fenix.jpeg"
import ioam from "/public/images/empresa/ioam.jpeg"
import mega from "/public/images/empresa/mega.jpeg"
import rb from "/public/images/empresa/rb.jpeg"
import vale from "/public/images/empresa/vale.jpeg"



export default function Parceiros() {
  return (

    <div className="flex flex-col md:flex-row py-8 justify-center items-center">
      <div className="w-full mb-8 font-semibold md:ml-20 text-4xl border-l-8 border-red-700 ">
        Parceiros
      </div>
      <div className=" h-full w-full flex flex-row">
        <div className="flex flex-col ">
          <div className="flex flex-row">

            <Image
              className="h-20 w-20"

              src={Sonda}
              alt="blog" />
            <Image
              className="h-20 w-20"
              src={am}
              alt="blog" />
            <Image
              className="h-20 w-20"
              src={contabilidade}
              alt="blog" />
            <Image
              className="h-20 w-20"
              src={emsa}
              alt="blog" />
            <Image
              className="h-20 w-20"
              src={vale}
              alt="blog" />
          </div>
          <div className="flex flex-row pt-4">
            <Image
              className="h-20 w-20"
              src={mega}
              alt="blog" />
            <Image
              className="h-20 w-20"
              src={fenix}
              alt="blog" />
            <Image
              className="h-20 w-20"
              src={global}
              alt="blog" />
            <Image
              className="h-20 w-20"
              src={ioam}
              alt="blog" />
            <Image
              className="h-20 w-20"
              src={rb}
              alt="blog" />

          </div>
        </div>

      </div>
    </div>

  )
}