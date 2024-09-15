
import PropTypes from 'prop-types';
import css from "./Profile.module.css";

export function Profile({name, tag, location, image, stats}) {
    return (
        <div className={css.profile}>
            <div>
                <img src={image} alt="User avatar"/>
                <p className={css.name}>{name}</p>
                <p className={css.desc}>@{tag}</p>
                <p className={css.desc}>{location}</p>
            </div>
            <ul className={css.stats}>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
      </div>
    );
  };

  Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
  };