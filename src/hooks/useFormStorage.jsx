import { useState, useEffect } from "react";

const useFormStorage = (key, initialValue) => {
    const getStoredValue = () => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : initialValue;
        } catch (error) {
            console.error(`Error parsing localStorage key "${key}":`, error);
            return initialValue;
        }
    };

    const [value, setValue] = useState(getStoredValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default useFormStorage;
