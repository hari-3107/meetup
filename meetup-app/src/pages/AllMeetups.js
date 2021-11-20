import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-getting-started-89b66-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };
          console.log(meetup)
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
// const DUMMY_DATA = [
//      {
//          id:'m1',
//          title:'This is a first meetup',
//          image:'https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
//          address:'Meetup street 5, meetup city',
//          description:'This is an amazing meetup that you should not miss'
//      },
//      {
//         id:'m2',
//         title:'This is a second meetup',
//         image:'https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
//         address:'Meetup street 5, meetup city',
//         description:'This is an amazing meetup that you should not miss'
//     },
//     {
//         id:'m3',
//         title:'This is a third meetup',
//         image:'https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
//         address:'Meetup street 5, meetup city',
//         description:'This is an amazing meetup that you should not miss'
//     } 
//  ]
