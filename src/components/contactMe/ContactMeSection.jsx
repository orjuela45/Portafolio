import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { LanguageContent, simpleTranslation } from "../language/LanguageContent";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const ContactMeSection = () => {
  const form = useRef();

  const alertEmailSent = {
    title: simpleTranslation("lbl-emailSend-title"),
    text: simpleTranslation("lbl-emailSend-text"),
    icon: "success"
  }
  const alertFormIncomplete = {
    title: simpleTranslation("lbl-formIncomplete-title"),
    text: simpleTranslation("lbl-formIncomplete-text"),
    icon: "warning"
  }
  const alertEmailError = {
    title: simpleTranslation("lbl-emailError-title"),
    text: simpleTranslation("lbl-emailError-text"),
    icon: "danger"
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.user_email.value.trim() || !form.current.user_name.value.trim() || !form.current.message.value.trim()){
      MySwal.fire(alertFormIncomplete)
      return
    }

    emailjs.sendForm('service_bloddfa', 'template_l3zbl35', form.current, 'RCflSFoIHYUPLg9N-')
      .then(() => {
          MySwal.fire(alertEmailSent)
      }, () => {
          MySwal.fire(alertEmailError)
      });
  };
  return (
    <>
      <h1 className="border-bottom"><LanguageContent contentID={"lbl-contactInformation"} /></h1>
      <div className="row ">
        <div className="col-12 p-4">
          <p style={{textAlign: "justify"}}><LanguageContent contentID={"lbl-descriptionContacMe"} /></p>
          <form ref={form} onSubmit={sendEmail} className="form-control">
            <h5><LanguageContent contentID={"lbl-form"} /></h5>
            <div className="row justify-content-between">
              <div className="mb-2 col-12 col-sm-6">
                <label htmlFor="user_name" className="form-label"><LanguageContent contentID={"lbl-userName"} /></label>
                <input type="text" className="form-control" id="user_name" name="user_name" />
              </div>
              <div className="mb-2 col-12 col-sm-6">
                <label htmlFor="user_email" className="form-label"><LanguageContent contentID={"lbl-emailAddress"} /></label>
                <input type="email" className="form-control" id="user_email" name="user_email" />
              </div>
              <div className="mb-2 col-12">
                <label htmlFor="message" className="form-label"><LanguageContent contentID={"lbl-message"} /></label>
                <textarea className="form-control" id="message" name="message" />
              </div>
              <button type="submit" className="btn p-2 btn-primary col-3 m-auto "><LanguageContent contentID={"lbl-sent"} /></button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
