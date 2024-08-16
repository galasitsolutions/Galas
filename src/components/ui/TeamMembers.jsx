import PropTypes from 'prop-types';

function TeamMembers({ members, gapClass }) {
  const half = Math.ceil(members.length / 2);
  const [firstHalf, secondHalf] = [members.slice(0, half), members.slice(half)];

  return (
    <div>
      {/* First Container */}
      <div className={`teams grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ${gapClass}`}>
        {firstHalf.map(member => (
          <div key={member.name} className="team-container flex flex-col justify-center items-center gap-4">
            <figure className="team-images flex flex-col justify-center items-center gap-4">
              <img src={member.image} alt={member.name} loading="lazy" className="w-full" />
              <figcaption className="flex flex-col items-center justify-center">
                <p>{member.name}</p>
                <p className="text-xs font-light text-slate-200">{member.position}</p>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>

     
      <div className={gapClass}></div>

      {/* Second Container */}
      <div className={`teams grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ${gapClass}`}>
        {secondHalf.map(member => (
          <div key={member.name} className="team-container flex flex-col justify-center items-center gap-4">
            <figure className="team-images flex flex-col justify-center items-center gap-4">
              <img src={member.image} alt={member.name} loading="lazy" className="w-full" />
              <figcaption className="flex flex-col items-center justify-center">
                <p>{member.name}</p>
                <p className="text-xs font-light text-slate-200">{member.position}</p>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}

TeamMembers.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  gapClass: PropTypes.string,
};

export default TeamMembers;
