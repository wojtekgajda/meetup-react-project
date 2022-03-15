import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map(meetup => (
        <MeetupItem key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    description={meetup.description}
                    title={meetup.title}
                    addres={meetup.address}
        />))}
    </ul>
  )
}

export default MeetupList;
