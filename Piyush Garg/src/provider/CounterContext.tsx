import { createContext, useContext, useState } from "react";

interface CounterContextValue {
    value: number;
    setCount: (num: number) => void
}

interface CounterProviderProps {
    children: React.ReactNode
}

const CounterContext = createContext<CounterContextValue | null>(null)

export const CounterProvider: React.FC<CounterProviderProps> = (props) => {
    const [count, setCount] = useState(1)

    return (
        <CounterContext.Provider
            value={{
                value: count,
                setCount
            }}>
            {props.children}
        </CounterContext.Provider>
    )

}

export const useCounter = () => {
    return useContext(CounterContext)
}