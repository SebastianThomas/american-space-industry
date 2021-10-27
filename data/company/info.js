const nasa = {
  fullName: 'National Aeronautics and Space Administration',
  shortName: 'NASA',

  foundedIn: new Date(),

  HQ: '',
};
const spacex = {
  fullName: 'Space Exploration Technologies Corp.',
  shortName: 'SpaceX',

  founder: 'Elon Musk',
  foundedIn: new Date(),

  ceo: 'Elon Musk',
  HQ: 'Hawthorne, CA',
};
const firefly = {
  fullName: 'Firefly Aerospace',
  shortName: 'Firefly',

  founder: 'Thomas E. Markusic',
  foundedIn: new Date(),

  ceo: 'Thomas E. Markusic',
  HQ: 'Austin, TX',
};
const blueOrigin = {
  fullName: 'Blue Origin',
  shortName: 'Blue Origin',

  logoPath: 'img/company/blue-origin-logo.png',

  founder: 'Jeff Bezos',
  foundedIn: new Date(2000, 9, 8),

  ceo: 'Bob Smith',
  HQ: 'Kent, Washington',
  mission: `Space travel has ever been expensive. Blue origin aims to make space more affordable by using reusable rockets, simmilar to commercial aviation. Furthermore, Blue Origin wants to make space "possible" for smaller companies who want to work in space.`,
};

function getCompany(name) {
  switch (name.toLowerCase()) {
    case 'nasa':
      return nasa;
    case 'spacex':
      return spacex;
    case 'firefly':
      return firefly;
    case 'blue-origin':
      return blueOrigin;
    default:
      throw new Error('Unknown company name: ' + name);
  }
}

module.exports = {
  nasa,
  spacex,
  firefly,
  blueOrigin,
  getCompany,
};
