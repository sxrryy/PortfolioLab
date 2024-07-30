import React from 'react';

function Statistics() {
  const stats = [
    { number: '10', label: 'Oddanych worków', span: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula urna at risus tincidunt, nec interdum arcu volutpat.' },
    { number: '5', label: 'Wspartych organizacji', span: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula urna at risus tincidunt, nec interdum arcu volutpat.' },
    { number: '7', label: 'Zorganizowanych zbiórek', span: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula urna at risus tincidunt, nec interdum arcu volutpat.' },
  ];

  return (
    <div className="container mx-auto flex relative justify-around bg-yellow-400 py-8 my-11">
      <div className="flex justify-around">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-4xl font-bold">{stat.number}</h3>
            <p className="text-xl">{stat.label}</p>
            <span className="text-xs">{stat.span}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Statistics;
