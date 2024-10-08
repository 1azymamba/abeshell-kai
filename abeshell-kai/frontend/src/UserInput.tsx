// UserInput.tsx
import React from 'react';

interface UserInputProps {
    text: string;
    onTextChange: (text: string) => void;
}

const UserInput: React.FC<UserInputProps> = ({ text, onTextChange }) => {
    return (
        <input type="text" value={text} onChange={(e) => onTextChange(e.target.value)} />
    );
};

export default UserInput;