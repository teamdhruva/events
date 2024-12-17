import image from '../image/test.jpeg'
export const events = [
    {
      title: 'Stargazing at Orion',
      description: 'Join us for an amazing stargazing session where we explore the Orion constellation.',
      date: '2024-12-21',
      image: image, 
      link: 'https://youtube.com/@dhruva1910?si=c1b_pefdHGn3OC56',
      status:'live',
    },
    {
      title: 'Meteor Shower Viewing',
      description: 'Experience the thrill of a meteor shower under the starry sky.',
      date: '2024-11-10',
      image: image, 
      link: '',
      status:'',
    },
    {
      title: 'Lunar Eclipse Observation',
      description: 'Watch the beauty of a lunar eclipse with our telescope experts.',
      date: '2024-10-05',
      image: image,
      link: '',
      status:'',
    },
  ];
  

  export const lectures = [
    {
      id: 1,
      title: "Introduction to Astronomy",
      description: "A beginner's guide to understanding the universe.",
      date: "March 15, 2024",
      image: "https://via.placeholder.com/150", // Replace with an actual image URL
      youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube link
    },
    {
      id: 2,
      title: "Space Exploration and Technology",
      description: "Learn about the technological advancements in space exploration.",
      date: "February 20, 2024",
      image: "https://via.placeholder.com/150", // Replace with an actual image URL
      youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube link
    },
    {
      id: 3,
      title: "Cosmology: Theories of the Universe",
      description: "Explore the various theories on the origin and fate of the universe.",
      date: "January 5, 2024",
      image: "https://via.placeholder.com/150", // Replace with an actual image URL
      youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube link
    },
  ];


  export const event = [
      {
        id: 1,
        title: "Stargazing Session",
        subtitle: "Observe constellations and planets through telescopes.",
        link: "/stargazingevent",
        image: image,
      },
      {
        id: 2,
        title: "Workshops",
        subtitle: "Learn about astronomy tools and techniques.",
        link: "/",
        image: image,
      },
      {
        id: 3,
        title: "Lectures",
        subtitle: "Discover the latest advancements in space science.",
        link: "lectures/",
        image: image,
      },
    ];