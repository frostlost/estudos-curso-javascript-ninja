function person() {
  return {
    name: 'roger',
    lastName: 'melo',
    fullName: () => 'oi'
  };
};

console.log(person().fullName());