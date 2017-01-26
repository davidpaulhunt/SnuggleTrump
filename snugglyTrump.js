const kittyNamePool = [
  'Bingo',
  'Mufasa',
  'Bubbles',
  'Smokey',
  'Milo',
  'Boots',
  'Mittens',
  'Whiskers',
  'Simba',
  'Kitty',
  'Leo',
  'Puss',
];

const kittyImageUrlPool = [
  'https://c2.staticflickr.com/4/3408/3523637727_8a769d56ff_z.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/1/11/Mihail_Manolov_-_Little_Kitten_(by-sa).jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Green_eyes_kitten.jpg/871px-Green_eyes_kitten.jpg',
  'https://cdn.pixabay.com/photo/2013/05/17/15/54/cat-111793_960_720.jpg',
  'https://c1.staticflickr.com/9/8088/8548825587_2aa8441bc1_b.jpg',
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomItemFromArray = (arry) => arry[getRandomInt(0, arry.length - 1)];

const randomKittyName = () => randomItemFromArray(kittyNamePool);
const randomKittyImageUrl = () => randomItemFromArray(kittyImageUrlPool);

const kittyName = randomKittyName();
const kittyImageUrl = randomKittyImageUrl();

document.body.innerHTML = document.body.innerHTML
.replace(/href=".*?"|<img.*?src=".*?".*?>|Donald John Trump|Donald J. Trump|Donald Trump|The Donald|DonaldJTrump|DonaldTrump|Donald|Mr. Trump|Trump/ig,
(match) => {
  if (match.startsWith('href')) return match;

  if (match.startsWith('<img')) return match.replace(/src=".*?"/, `src="${kittyImageUrl}"`);

  return kittyName;
});

const imgs = Array.from(document.getElementsByTagName('img'));
const rgx = new RegExp(kittyName);
const srcUrls = imgs.filter(el =>
  (el.alt && el.alt.includes(kittyName)) || (el.src && el.src.includes(kittyName)))
.map(el => el.src);

Array.from(imgs).forEach((el) => {
  if (srcUrls.includes(el.src)) {
    el.src = kittyImageUrl;
  }
});
