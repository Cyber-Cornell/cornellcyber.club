import { useState } from "react";
import type { FormEvent } from "react";
import PageHeading from "../components/PageHeading";

/**
 * Free Web3Forms relay: submissions are emailed to cornellcyber@gmail.com
 * (250 submissions/month on the free tier). If a submission fails, the form
 * falls back to a mailto link.
 */
const WEB3FORMS_ACCESS_KEY = "088ff768-39dd-4ae6-8ac1-6968ee39ba28";

const CONTACT_EMAIL = "cornellcyber@gmail.com";

type SubmitState = "idle" | "sending" | "success" | "error";

/** Shared by every text input and the textarea. */
const field =
  "bg-black border-2 border-white/70 rounded-md p-3 text-cream outline-none focus:border-accent transition-colors duration-200";

const label = "flex flex-col gap-2 text-cream";

const Contact = () => {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);

    setSubmitState("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitState("success");
        form.reset();
      } else {
        setSubmitState("error");
      }
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <div className="text-center py-10 px-5 max-w-4xl mx-auto">
        <PageHeading>contact us</PageHeading>
        <p className="text-cream text-lg">
          reach us anytime at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-accent underline hover:text-white transition-colors duration-200"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>

      <div className="flex justify-center px-5 pb-16">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[600px] border-2 border-white rounded-lg p-6 md:p-8 flex flex-col gap-5 font-['Roboto_Mono']"
        >
          {/* honeypot: humans never see or fill this, bots do */}
          <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" tabIndex={-1} />

          <label className={label}>
            name
            <input
              type="text"
              name="name"
              required
              className={field}
            />
          </label>

          <label className={label}>
            email
            <input
              type="email"
              name="email"
              required
              className={field}
            />
          </label>

          <label className={label}>
            subject
            <input
              type="text"
              name="subject"
              required
              className={field}
            />
          </label>

          <label className={label}>
            message
            <textarea
              name="message"
              required
              rows={6}
              className={`${field} resize-y`}
            />
          </label>

          <button
            type="submit"
            disabled={submitState === "sending"}
            className="mt-2 border-2 border-accent rounded-full py-3 text-accent hover:bg-accent hover:text-ink transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitState === "sending" ? "sending..." : "send message"}
          </button>

          {submitState === "success" && (
            <p className="text-accent text-center">
              message sent — we'll get back to you soon!
            </p>
          )}
          {submitState === "error" && (
            <p className="text-cream text-center">
              something went wrong — email us directly at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
