import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';
import user from '../roots/user';
import data from '../roots/data';
import friends from '../roots/friends';
import transactions from '../roots/transactions';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.wrapper}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
