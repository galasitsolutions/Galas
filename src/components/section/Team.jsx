export default function Team() {
  return (
    <>
      <section className="team relative">
        <div className="section-space"></div>
        <div className="team-inner flex flex-col items-center gap-16 w-3/4 lg:3/4 m-auto sm:w-auto sm:m-0 md:w-auto md:m-0">
          <div className="content flex flex-col justify-center items-center sm:items-stretch text-center">
            <p className="section-title">
              <span className="line bg-blue-800 font-semibold"></span> Our Team
            </p>
            <div className="section-space-inner"></div>
            <h2 className="content-heading font-heading font-semibold mb-4">
              Meet our Team
              <br />
              <span className="text-blue-500">
                Passionate. Proactive. Expert.
              </span>
            </h2>
            <p className="text-xs">
              We lead with care
              <span className="line bg-white font-semibold"></span>our core
              value
              <span className="line bg-white font-semibold"></span>and a shared
              passion for connecting the world
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
