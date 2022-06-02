import React from 'react';

function Top10HighestPopulation() {
  const tenHighestPopulation = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 },
  ];

  return (
    <div>
      <h3>Top 10 highest population countries</h3>
      <div>
        {tenHighestPopulation.map(({ country, population }) => (
          <div
            key={country}
            style={{
              display: 'flex',
              margin: '0.4rem',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{
              width: '13rem',
            }}
            >
              {country}

            </div>
            <div style={{
              flex: 1,
            }}
            >
              <div style={{
                height: '1.5rem',
                backgroundColor: 'orange',
                borderRadius: '0.1rem',
                width: `${(population / tenHighestPopulation[0].population) * 100}%`,
              }}
              />
            </div>
            <div style={{
              marginLeft: '1rem',
            }}
            >
              {population.toLocaleString()}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Top10HighestPopulation;
