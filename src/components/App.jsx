import user from '../data/user';
import { Profile } from 'components';

// const appStyle = {

// };

export const App = () => {
  return (
    // <div style={appStyle}>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    // </div>
  );
};
