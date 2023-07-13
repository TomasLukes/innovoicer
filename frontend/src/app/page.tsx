import Image from "next/image";
import innovoicerLogo from "../../public/assets/icons/innovoicer-logo.png"
import ButtonPrimary from "./components/ui/buttons/ButtonPrimary";
import InputText from "./components/ui/forms/InputText";

export default function Home() {
  return (
    <main className="h-screen w-screen grid place-content-center bg-light-bg dark:bg-dark-bg">
      <section className="w-72">
        <div className="mx-auto w-full flex items-center gap-2 mb-4">
          <h1 className="text-light-typo dark:text-dark-typo text-3xl font-semibold">Innovoicer</h1>
          <Image src={innovoicerLogo} alt="Logo of Innovoicer app" width={50} height={50} className="ml-auto"/>
        </div>
        <form action="" className="bg-white dark:bg-secondary-bg py-8 px-12 rounded-lg">
          <h2 className="text-light-typo dark:text-dark-typo text-center text-2xl font-medium mb-4">Login</h2>
          <InputText label='Username' />
          <InputText label='Password' />
          <ButtonPrimary label='Login' />
        </form>
      </section>
    </main>
  )
}
