import React, { Dispatch, SetStateAction } from 'react';

interface UserInputProps {
    user_name: string;
    setUserName: Dispatch<SetStateAction<string>>;
}

const UserInput: React.FC<UserInputProps> = ({ user_name, setUserName }) => {

    function getUserName() {
        alert(`${user_name}さん、ようこそ茂田オフィスへ！`);
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                name="user_name"
                value={user_name}
                onChange={handleInputChange}
            />
            <button onClick={getUserName} type="button">名前を決定！</button>
        </div>
    );
};

export default UserInput;
