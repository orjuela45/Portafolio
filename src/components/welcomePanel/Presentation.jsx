import { LanguageContent } from "../language/LanguageContent"

export const Presentation = () => {
  return (
    <>
      <h1><LanguageContent contentID="lbl-greet" /></h1>
      <h1><LanguageContent contentID="lbl-presentation" /></h1>
      <h2 className="rounded-pill col-7 bg-white p-2 text-dark mt-4 text-center"><LanguageContent contentID="lbl-profession" /></h2>
    </>
  )
}
