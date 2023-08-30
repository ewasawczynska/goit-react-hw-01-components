import user from '../data/user';
import data from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';

import { Profile } from 'components';
import { Statistics } from 'components';
import { FriendList } from 'components';
import { TransactionHistory } from 'components';

const appStyle = {
  display: 'flex',
  gap: '40px',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '20px',
  paddingBottom: '20px',
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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
