import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

import clsx from "clsx";

export default function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <div className={css.card} id={id}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(isOnline && css.is_online, !isOnline && css.is_offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
