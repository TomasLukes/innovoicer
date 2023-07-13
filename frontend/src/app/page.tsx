'use client'
import Image from "next/image";
import innovoicerLogo from "../../public/assets/icons/innovoicer-logo.png"
import ButtonPrimary from "../components/ui/buttons/ButtonPrimary";
import InputText from "../components/ui/forms/InputText";
import handleLogin from "@/helpers/login";
import { useForm } from "react-hook-form";

type FormData = {
  username: string,
  password: string,
}

export default function Login() {
  const {register, setValue, handleSubmit, formState: { errors }, } = useForm<FormData>()

  const onSubmit = handleSubmit((data) => handleLogin(data.username, data.password))

  return (
    <main className="h-screen w-screen grid place-content-center bg-light-bg dark:bg-dark-bg">
      <section className="w-72">
        <div className="mx-auto w-full flex items-center gap-2 mb-4">
          <h1 className="text-light-typo dark:text-dark-typo text-3xl font-semibold">Innovoicer</h1>
          <Image src={innovoicerLogo} alt="Logo of Innovoicer app" width={50} height={50} className="ml-auto"/>
        </div>
        <form onSubmit={onSubmit} className="bg-white dark:bg-secondary-bg py-8 px-12 rounded-lg">
          <h2 className="text-light-typo dark:text-dark-typo text-center text-2xl font-medium mb-4">Login</h2>
          <label>Username</label>
          <input type="email" required {...register("username")} />
          <label>Password</label>
          <input type="password" required {...register("password")} />
          <ButtonPrimary label='Login' />
        </form>
      </section>
    </main>
  )
}
