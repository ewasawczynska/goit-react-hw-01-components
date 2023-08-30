import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <li className={css.friendItem}>
      <span className={isOnline ? css.isOnline : css.isOffline}></span>
      <img
        className={css.avatar}
        src={avatar}
        alt={`${name}'s avatar`}
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
