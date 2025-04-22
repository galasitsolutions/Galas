import cyberlogo from "../../assets/img/icons/cyberlogo.png";
import healthcare from "../../assets/img/icons/healthcare.png";
import banking from "../../assets/img/icons/banking.png";
export default function PartnerSection() {

  return (
    <>
      <section id="team" className="team relative ">
        <div className="section-space"></div>
        <div className="team-inner container mx-auto px-6 flex flex-col items-center gap-8">
          <div className="content flex flex-col justify-center items-center text-center w-full">
            <p className="section-title pb-4">
              <span className="line bg-blue-800 font-semibold"></span> Industries we're dealing with
            </p>
            <h2 className="content-heading font-heading font-semibold mb-4">
              <span className="text-blue-500">
                Integrate. Collaborate. Challenge.
              </span>
            </h2>
            <p className="text-xs">
              produce solutions that connect communicate and inspire
            </p>
          </div>

          <section className="container mx-auto rounded-lg py-2">
            <div className="flex flex-row items-center">
              {/* logo 1 */}
              <div className="m-auto flex justify-center items-center">
                <div className="p-4 flex items-center flex-col">
                  <img
                    src={cyberlogo}
                    alt="Cityvibe"
                    className="h-28 w-auto rounded-lg"
                  />
                  <p className="mt-3">Cyber Security</p>
                </div>
              </div>
              {/* logo 2 */}
              <div className="m-auto  flex justify-center items-center">
                <div className="p-4 flex items-center flex-col">
                    <img
                      src={healthcare}
                      alt="BrandLogo"
                      className="h-28 w-auto rounded-lg"
                    />
                    <p className="mt-3">HealthCare</p>
                </div>
              </div>
              {/* logo 3 */}
              <div className="m-auto  flex justify-center items-center">
                <div className="p-4 flex items-center flex-col">
                  <img
                    src={banking}
                    alt="Ankikerris"
                    className="h-24 w-auto rounded-lg"
                  />
                  <p className="mt-5 ">Banking System</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
