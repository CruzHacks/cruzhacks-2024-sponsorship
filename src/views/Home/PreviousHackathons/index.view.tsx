import React from 'react';
import { PreviousHackathonData } from '../../../Props/PreviousHackathonProps/props'; // Adjust the import path as needed
import { nanoid } from 'nanoid';

interface PreviousHackathonsProps {
  hackathons: PreviousHackathonData[];
}

const PreviousHackathons: React.FC<PreviousHackathonsProps> = ({ hackathons }) => (
  <div className='previous-hackathons'>
    <h2>Previous Hackathons</h2>
    <ul className='previous-hackathons--list'>
      {hackathons.map((hackathon, index) => (
        <li key={nanoid()} className='previous-hackathons--item'>
          <h3>{hackathon.name}</h3>
          <p>
            Link: <a href={hackathon.link} target='_blank' rel='noopener noreferrer'>{hackathon.link}</a>
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default PreviousHackathons;
