/* eslint-disable @next/next/no-img-element */
import Card from '../ui/Card.js';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router.js';
import Image from 'next/image.js';

function MeetupItem(props) {
  const router = useRouter()
  function showDetailsHandler(){
    router.push("/" + props.id) // we need to defined meetupId based on new details meetups

  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;