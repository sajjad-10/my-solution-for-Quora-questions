import React, { useState, useEffect } from "react";
import UserItem from "./UserItem";
import AverageAge from "./AverageAge";
import usersData from "./users.json";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [averageAge, setAverageAge] = useState(0);

    useEffect(() => {
        // فیلتر کردن کاربران با نقش "user"
        const filteredUsers = usersData.filter((user) => user.role === "user");
        setUsers(filteredUsers);
    }, []);
    useEffect(() => {
        // فیلتر کردن کاربران با نقش "admin"
        const adminUsers = usersData.filter((user) => user.role === "admin");
        // محاسبه میانگین سن کاربران با نقش "admin"

        const totalAge = adminUsers.reduce((sum, user) => {
            return sum + user.age;
        }, 0);
        const calculatedAverageAge = totalAge / adminUsers.length;
        setAverageAge(calculatedAverageAge);
    }, []);

    return (
        <div>
            {users.map((user, i) => (
                <UserItem key={i} name={user.name} />
            ))}
            <AverageAge average={averageAge}/>
        </div>
    );
};

export default UserList;
