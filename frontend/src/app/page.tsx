import ButtonDelete from "./components/ui/buttons/ButtonDelete";
import ButtonNewInvoice from "./components/ui/buttons/ButtonNewInvoice";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-light-bg dark:bg-dark-bg">
      <section>
        <label htmlFor="">
          <input type="text" />
        </label>
        <ButtonDelete />
        <ButtonNewInvoice />
      </section>
      <h1 className="text-light-typo dark:text-dark-typo">Test headline</h1>
    </main>
  )
}
