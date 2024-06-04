import React from 'react'

interface MyButtonProps {
    text: string;
    children: React.ReactNode
}

const MyButton1 = (props: MyButtonProps) => {
    // const MyButton1: React.FC<MyButtonProps> = (props) => {
    return (
        <button>
            {props.children}
        </button>
    )
}

export default MyButton1