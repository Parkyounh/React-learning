import { useState,useEffect } from "react"

export default function UserList(){
const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(res => res.json())
         .then(data => setUsers(data))
    
    },[]);  // 빈 배열, 한번만 실행


    return(
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>{user.name} ({user.email})</li>
                ))}
            </ul>
        </div>
    )
}

