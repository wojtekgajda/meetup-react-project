import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from "react-router-dom";

function NewMeetupPage() {
  const history = useHistory()

  const handleAddNewMeetup = (meetupData) => {
    //firebase daje możliwosć stowrzenia własnej bazy /meetups.json
    fetch('https://meetup-project-f4583-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).catch((err) => console.log(err))
      .then(() => history.replace('/'))
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddNewMeetup={handleAddNewMeetup}/>
    </section>
  )
}

export default NewMeetupPage;
