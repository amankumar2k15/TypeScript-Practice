import React from 'react'

interface ButtonProps {
    text: string | boolean | number;
    onClickk?: () => void;         //optional bann gya hai ye onClickk
}

const MyButton: React.FC<ButtonProps> = (props) => {
    const { onClickk, text } = props
    return (
        <button onClick={onClickk}>{text}</button>
    )
}

export default MyButton
