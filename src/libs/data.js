import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const postTemplate = {
  postId: 0,
  title: 'a title',
  date: 'DD/MM/YY',
  author: 'author',
  text: lorem.generateParagraphs(7),
  highlights: [
    lorem.generateWords(3),
    lorem.generateWords(3),
    lorem.generateWords(3),
  ],
  image: { link: 'link', alt: 'alt' },
};

const samplePosts = [
  {
    postId: 1,
    title: 'One Of My Favourites',
    date: '12/10/20',
    author: 'Bobby Nest',
    text: lorem.generateParagraphs(7),
    highlights: [
      lorem.generateWords(3),
      lorem.generateWords(3),
      lorem.generateWords(3),
    ],
    image: {
      link:
        'https://i.pinimg.com/originals/71/a0/5f/71a05f47b8f449fc231881416bf4bc66.jpg',
      alt: 'A blue-grey pigeon turns to face the camera.',
    },
  },
  {
    postId: 2,
    title: 'Look At This Marvellous Pigeon',
    date: '14/10/20',
    author: 'Lucy Wing',
    text: lorem.generateParagraphs(7),
    highlights: [
      lorem.generateWords(3),
      lorem.generateWords(3),
      lorem.generateWords(3),
    ],
    image: {
      link: 'https://i.redd.it/u6xrjmzbrf321.png',
      alt: 'A close up shot of a pigeon with glorious ruffles.',
    },
  },
  {
    postId: 3,
    title: 'A Lovely Pidgeon',
    date: '16/10/20',
    author: 'Mohammad Feather',
    text: lorem.generateParagraphs(7),
    highlights: [
      lorem.generateWords(3),
      lorem.generateWords(3),
      lorem.generateWords(3),
    ],
    image: {
      link:
        'https://image.freepik.com/free-photo/pidgeon-waters-edge_19485-37038.jpg',
      alt:
        'A pigeon with a spectacular green plumage stares thoughtfully into the distance.',
    },
  },
  {
    postId: 4,
    title: 'An Ugly Pidgeon',
    date: '10/11/22',
    author: 'Squatting Pigeon',
    text: lorem.generateParagraphs(7),
    highlights: [
      lorem.generateWords(3),
      lorem.generateWords(3),
      lorem.generateWords(3),
    ],
    image: {
      link:
        'https://img.buzzfeed.com/buzzfeed-static/static/2017-05/15/13/asset/buzzfeed-prod-fastlane-01/sub-buzz-32011-1494870834-15.jpg',
      alt:
        'A pigeon smoking.',
    },
  }
];

export default samplePosts;
