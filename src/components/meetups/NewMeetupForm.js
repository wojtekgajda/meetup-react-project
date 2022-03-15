import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import {useRef} from "react";

function NewMeetupForm(props) {
  const titleInputRef = useRef()
  const imageInputRef =  useRef()
  const addressInputRef  =  useRef()
  const descriptionInputRef =  useRef()

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImageUrl = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImageUrl,
      address: enteredAddress,
      description: enteredDescription
    }
    props.onAddNewMeetup(meetupData);
  }


  return (
    <Card>
      <form className={classes.form} action="" onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type="text" required id='title' ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type="url" required id='image' ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='addres'>Meetup Addres</label>
          <input type="text" required id='addres' ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Meetup Description</label>
          <textarea type="text" required id='description' rows='5' ref={descriptionInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm;
