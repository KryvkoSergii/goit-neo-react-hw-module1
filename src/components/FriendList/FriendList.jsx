import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem"
import css from "./FriendList.module.css";

export function FriendList({ friends }) {
  let content = friends.map((friend) => getFriendListItem(friend));
  return <ul className={css.friends_list}> {content} </ul>;
}

function getFriendListItem(friend) {
  return <li key={friend.id}>
                <FriendListItem id={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
        </li>;
}

let FriendItem = PropTypes.shape(
    {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      }
)

FriendList.propTypes = 
{
    friends: PropTypes.arrayOf(FriendItem)
};
