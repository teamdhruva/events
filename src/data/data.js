// import image from '../image/test.jpeg'
import lecture from '../image/lectures.jpeg'
import stargazing from '../image/stargazing.jpeg'
import workshop from '../image/workshops.jpeg'
//Stargazing photos
import stargazing1 from '../image/stargazing/Stargazing2.webp'
import stargazing2 from '../image/stargazing/stargazing1.jpeg'
//Lecture photos
import Einstein from '../image/lectures/Einstein.jpg';

export const events = [
    {
      title: 'STARGAZING SPECTACLES',
      description: 'Join the Dhruva Astrophysics Club on the 20th of December, 2024, for an enchanting stargazing session. From 7:00 PM to 10:00 PM, participants will have the opportunity to explore the night sky using high-powered telescopes, guided by knowledgeable members of the club and the Amateur Astronomers Association of Bombay (ABAA). The event aims to provide a unique experience, allowing attendees to witness the planets and stars up close, learn about celestial phenomena, and deepen their understanding of the cosmos. With expert guidance, this session promises to be a memorable journey through the wonders of the universe.',
      date: '2024-12-21',
      image: stargazing1, 
      link: 'https://youtube.com/@dhruva1910?si=c1b_pefdHGn3OC56',
      status:'',
    },
    {
      title: 'STARGAZING SPECTACLES',
      description: `Under a starry night, we explored constellations and admired Jupiter's majestic bands and Saturn's stunning rings through telescopes. The event brought together enthusiasts to marvel at the cosmos, weaving celestial stories and forging connections. A night of wonder, curiosity, and awe, celebrating the beauty and grandeur of our universe.`,
      date: '2024-02-02',
      image: stargazing2, 
      link: '',
      status:'',
    },
  ];
  
  export const lectures = [
    {
      id: 1,
      title: "EINSTEIN LECTURES",
      speaker:'Rajaram Nityananda',
      speakerWebsite:'https://www.icts.res.in/people/rajaram-nityananda',
      description: "S. Chandrasekhar, born on the 19th of October, 1910, was one of the outstanding astrophysicists of the twentieth century. His career was also unique in falling into distinct phases, each marked by substantial published work, culminating in a book. The very first phase, in which he derived the limiting mass for white dwarf stars, resulted in the Nobel Prize for physics after a fifty-year delay. This talk reviewed the bare details of his life and then give a feel for his contributions in each of the six phases.",
      date: "October 29, 2024",
      image: Einstein, 
      youtubeLink: "https://www.youtube.com/live/FdcoFf-KE5Y?si=D-a-IrN5yMA_zFie", 
    },
  ];



  export const event = [
      {
        id: 1,
        title: "STARGAZING SESSIONS",
        subtitle: "Observe constellations and planets through telescopes.",
        link: "/stargazingevent",
        image: stargazing,
      },
      {
        id: 2,
        title: "WORKSHOPS",
        subtitle: "Learn about astronomy tools and techniques.",
        link: "/",
        image: workshop,
      },
      {
        id: 3,
        title: "LECTURES",
        subtitle: "Discover the latest advancements in space science.",
        link: "lectures/",
        image: lecture,
      },
    ];