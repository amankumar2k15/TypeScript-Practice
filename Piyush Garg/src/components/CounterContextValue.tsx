import React from 'react'
import { useCounter } from '../provider/CounterContext'

const CounterContextValue: React.FC = () => {
    const context = useCounter()
    return (
        <div>
            <div>Value is {context?.value}</div>
            <button onClick={(() => context?.setCount(context.value + 1))}> Increment Button</button>
        </div>
    )
}

export default CounterContextValue
