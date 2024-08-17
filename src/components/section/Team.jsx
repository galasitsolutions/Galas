import TeamMembers from "../ui/TeamMembers";
import Shashank from "../../assets/img/team/shashank.webp";
import Vanshika from "../../assets/img/team/vanshika.webp";
import Shubham from "../../assets/img/team/shubham.webp";
import Ankit from "../../assets/img/team/ankit.webp";
import Gajendra from "../../assets/img/team/gajendra.webp";
import Sakshi from "../../assets/img/team/sakshi.webp";

export default function Team() {
  const teamMembers = [
    {
      name: "Shashank Singh",
      position: "Founder and Director",
      image: Shashank,
    },
    {
      name: "Vanshika Mohan",
      position: "Vice-President (HR)",
      image: Vanshika,
    },
    {
      name: "Shubham Singh",
      position: "Chief Technology Officer",
      image: Shubham,
    },
    {
      name: "Ankit Upadhyay",
      position: "Project Manager",
      image: Ankit,
    },
    {
      name: "Gajendra Tripathi",
      position: "MERN Stack Developer",
      image: Gajendra,
    },
    {
      name: "Sakshi Singh",
      position: "Web Developer",
      image: Sakshi,
    },
  ];

  return (
    <>
      <section className="team relative">
        <div className="section-space"></div>
        <div className="team-inner container mx-auto px-6 flex flex-col items-center gap-8">
          <div className="content flex flex-col justify-center items-center text-center w-full">
            <p className="section-title pb-4">
              <span className="line bg-blue-800 font-semibold"></span> Our Team
            </p>
            <h2 className="content-heading font-heading font-semibold mb-4">
              Meet Our Team
              <br />
              <span className="text-blue-500">
                Passionate. Proactive. Expert.
              </span>
            </h2>
            <p className="text-xs">
              We lead with care
              <span className="line bg-white font-semibold"></span> our core
              values
              <span className="line bg-white font-semibold"></span> and a shared
              passion for connecting the world.
            </p>
          </div>
          <TeamMembers members={teamMembers} />
        </div>
      </section>
    </>
  );
}
