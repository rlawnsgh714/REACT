import axios from 'axios';
import {memo, useContext, useEffect, useState} from 'react';
import {selectContext} from '../App';

const UserSelect = () => {
  const {ok, setOk} = useContext(selectContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log('useEffect 사용...');
    let myTimer = null;
    axios
      .get(`http://localhost:9000/users/list`)
      .then(result => {
        setUsers(result.data);
        myTimer = setTimeout(() => {
          setOk('select 완료');
        }, 2000);
      })
      .catch(e => {
        console.log(e);
      });
    return () => {
      clearTimeout(myTimer);
    };
  }, [ok]);
  return (
    <div>
      <h1>select</h1>
      <table style={{border: '1px solid black', width: '100%'}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr key={user.id} style={{textAlign: 'center'}}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>*****</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
 
export default memo(UserSelect);