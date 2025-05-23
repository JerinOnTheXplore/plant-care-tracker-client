import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const funFacts = [
  {
    id: 1,
    name: 'Aloe Vera',
    fact: 'Known as the “plant of immortality,” Aloe Vera has been used medicinally for thousands of years.',
    image:'https://i.ibb.co/JwC924dv/aelo-vera.webp'
  },
  {
    id: 2,
    name: 'Bamboo',
    fact: 'Bamboo can grow up to 35 inches in a single day, making it one of the fastest-growing plants!',
    image:'https://i.ibb.co/vCrYgCbY/lucky-bamboo.jpg'
  },
  {
    id: 3,
    name: 'Venus Flytrap',
    fact: 'The Venus Flytrap snaps shut in about a tenth of a second to catch its prey.',
    image:'https://i.ibb.co/6J1DWSw8/pothos.jpg'
  }
];


const FunPlantFacts = () => {
    return (
    <div className='px-4'>
    <div className='max-w-6xl mx-auto my-14 p-8 bg-gradient-to-r from-lime-200 to-lime-100 rounded-3xl shadow-lg border border-lime-300 text-green-900'>
    <h2 className="text-4xl font-bold text-center text-green-800 mb-8">🌿 Fun Plant Facts</h2>
     <ul className="grid gap-6 md:grid-cols-3">
        {funFacts.map(({ id, name, fact, image }) => (
          <li key={id} className="bg-lime-50 rounded-2xl shadow-md p-4 text-center flex flex-col items-center border border-lime-200">
          <img src={image} alt={name} className="w-28 h-28 object-cover rounded-full border-4 border-lime-300 mb-3" />
          <span
              data-tooltip-id={`fact-${id}`}
              data-tooltip-content={fact}
              className="text-green-700 hover:text-green-900 font-semibold text-2xl  cursor-pointer">{name}</span>
            <ReactTooltip
              id={`fact-${id}`}
              place="top"
              style={{
                backgroundColor: "#ecfccb",
                color: "#166534",
                border: "1px solid #bbf7d0",
                fontSize: "7px",
                padding: "10px 10px",
                borderRadius: "8px"
              }}/>
          </li>
        ))}
      </ul>
    </div>        
    </div>
    );
};

export default FunPlantFacts;