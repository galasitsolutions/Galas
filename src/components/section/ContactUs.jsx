import ContactCard from "../ui/ContactCard";

export default function ContactUs() {
  const countryOptions = [
    { value: "+91", label: "+91" },
    { value: "+1", label: "+1" },
    { value: "+44", label: "+44" },
  ];

  const contactUsProps = {
    contactTitle: "Contact",
    contactSubtitle:
      "Email, call, or complete the form to learn how Galas can solve your problem.",
    email: "info@galasitsolutions.com",
    phoneNumber: "+91 81787 77874",
    supportText:
      "Reach out to our support team for assistance with any issues or inquiries.",
    feedbackText:
      "We value your feedback to improve our services and meet your needs better.",
    mediaText: "For media inquiries, contact our media relations team.",
    customerSupportText: "Customer Support",
    countryOptions: countryOptions,
  };

  return (
    <>
      <div className="section-space" id="contact"></div>

      <section className="contact-us relative w-full h-full bg-neutral-200 text-black">
        <div className="section-space"></div>

        <section className="contact-inner container mx-auto px-4 flex flex-wrap gap-10 flex-col lg:flex-row justify-center items-stretch">
          <section className="card flex-1 flex flex-col px-2">
            <article className="card-contact flex flex-col gap-6 justify-between grow items-start rounded-lg flex-wrap">
              <div className="inner-content flex flex-col grow gap-2">
                <h2 className="content-heading font-heading font-semibold">
                  {contactUsProps.contactTitle}
                  <span className="text-blue-500"> Us</span>
                </h2>
                <p className="subtitle w-fit">
                  {contactUsProps.contactSubtitle}
                </p>
                <a href={`mailto:${contactUsProps.email}`} className="mail">
                  {contactUsProps.email}
                </a>
                <a
                  href={`tel:${contactUsProps.phoneNumber}`}
                  className="number"
                >
                  {contactUsProps.phoneNumber}
                </a>
                <a href="#" className="underline font-bold text-blue-800">
                  {contactUsProps.customerSupportText}
                </a>
              </div>
              <div className="bottom-content flex justify-between grow gap-6 flex-col lg:flex-row">
                <div className="contact-support grow flex flex-col gap-2">
                  <h5 className="font-bold">Contact-Support</h5>
                  <p className="text-xs">{contactUsProps.supportText}</p>
                </div>
                <div className="feedback grow flex flex-col gap-2">
                  <h5 className="font-bold">Feedback</h5>
                  <p className="text-xs">{contactUsProps.feedbackText}</p>
                </div>
                <div className="enquiry grow flex flex-col gap-2">
                  <h5 className="font-bold">Media Inquiry</h5>
                  <p className="text-xs">{contactUsProps.mediaText}</p>
                </div>
              </div>
            </article>
          </section>
          <section className="contact basis-2/5 lg:flex-1 flex flex-col rounded-lg">
            <ContactCard
              title="Get in Touch"
              subtitle="You can reach us anytime"
              email={contactUsProps.email}
              phoneNumber={contactUsProps.phoneNumber}
              countryOptions={contactUsProps.countryOptions}
            />
          </section>
        </section>

        <div className="section-space"></div>
      </section>
    </>
  );
}
