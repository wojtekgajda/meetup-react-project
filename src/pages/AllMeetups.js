import MeetupList from "../components/meetups/MeetupList";
import {useState, useEffect} from "react";


function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://meetup-project-f4583-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',)
      .then((response) => {
        return response.json()
      })
      .then(data => {
        const meetups = []
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          }
          meetups.push(meetup)
        }

        setIsLoading(false)
        setLoadedMeetups(meetups)
      })
      .catch((err) => console.log(err))
  }, [])


  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section>

      <h2>All meetups page</h2>
      <MeetupList meetups={loadedMeetups}/>

    </section>

  )
}

export default AllMeetupsPage;
