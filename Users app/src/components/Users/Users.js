import Card from '../UI/Card';
import classes from './Users.module.css';

const Users = ({users}) => {
  return (
    <Card className={classes.users}>
      <ul>
        {!!users.length && users.map(u => <li key={u.id}>{`${u.username} (${u.age} years old)`}</li>)}
      </ul>
    </Card>
  )
}

export default Users