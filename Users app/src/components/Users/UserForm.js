import { useState } from "react"
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './UserForm.module.css';

const UserForm = ({onAddNewUser}) => {

  const emtpyInfo = {
    username: '',
    age: ''
  }

  const [info, setInfo] = useState(emtpyInfo)
  const [error, setError] = useState();

  const infoChangeHandler = e => setInfo(prevState => ({...prevState, [e.target.name]: e.target.value}))

  const submitHandler = e => {
    e.preventDefault()
    for (const key in info) {
      if (!info[key].trim()) {
        setError({
          title: 'Invalid input',
          message: 'Please enter a valid name and age (non-empty values).',
        });
        return
      }
    }
    if (info.age <= 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return
    }
    onAddNewUser(info)
    setInfo(emtpyInfo)
  }

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label>Username</label>
          <input type='text' name='username' value={info.username} onChange={infoChangeHandler} />
          <label>Age (Years)</label>
          <input type='number' name='age' value={info.age} onChange={infoChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default UserForm