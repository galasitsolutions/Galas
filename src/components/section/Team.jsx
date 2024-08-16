
import TeamMembers from '../ui/TeamMembers';

export default function Team() {
  const teamMembers = [
    { 
      name: 'Shashank Singh',
      position: 'Founder and Director', 
      image: 'https://galasitsolutions.com/src/assets/img/team/shashank.webp' 
    },

    {
       name: 'Vanshika Mohan',
       position: 'Vice-President (HR)', 
       image: 'https://galasitsolutions.com/src/assets/img/team/vanshika.webp'
    },

    { 
      name: 'Shubham Singh',
      position: 'Chief Technology Officer', 
      image: 'https://galasitsolutions.com/src/assets/img/team/shubham.webp' 
    },

    {
       name: 'Ankit Upadhyay', 
       position: 'Project Manager', 
       image: 'https://galasitsolutions.com/src/assets/img/team/ankit.webp'
    },

    { 
      name: 'Gajendra Tripathi', 
      position: 'MERN Stack Developer', 
      image: 'https://galasitsolutions.com/src/assets/img/team/gajendra.webp'
     },

    { 
      name: 'Sakshi Singh', 
      position: 'Web Developer', 
      image: 'https://galasitsolutions.com/src/assets/img/team/sakshi.webp'
     },
  ];

  return (
    <>
      <section className="team relative container mx-auto px-6">
        <div className="section-space"></div>
        <div className="team-inner flex flex-col items-center w-[calc(100%-30%)] mx-auto gap-16">
          <div className="content flex flex-col justify-center items-center text-center">
            <p className="section-title pb-4">
              <span className="line bg-blue-800 font-semibold"></span> Our Team
            </p>
         
            <h2 className="content-heading font-heading font-semibold mb-4">
              Meet our Team
              <br />
              <span className="text-blue-500">Passionate. Proactive. Expert.</span>
            </h2>
            <p className="text-xs">
              We lead with care
              <span className="line bg-white font-semibold"></span>our core value
              <span className="line bg-white font-semibold"></span>and a shared
              passion for connecting the world
            </p>
          </div>
          <TeamMembers members={teamMembers} gapClass="my-8" />
        </div>
      </section>
      <div className="section-space"></div>
    </>
  );
}