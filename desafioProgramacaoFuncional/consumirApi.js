const get = async () => {
  const url = "https://swapi.dev/api/people/";
  const result = await fetch(url).then((request) => request.json());
  return result.results;
};

const getTenPeople = async () => {
  const people = await get();
  const end = [];
  for (let i = 1; i <= 3; i++) {
    const object = {
      nome: people[i].name,
      height: people[i].height,
      mass: people[i].mass,
      gender: people[i].gender,
    };
    end.push(object);
  }
  return end;
};

getTenPeople();
