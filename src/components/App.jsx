import user from '../data/user';
import data from '../data/data';
import { Profile } from 'components';
import { Statistics } from 'components';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '20px',
};

export const App = () => {
  return (
    <div style={appStyle}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
};
