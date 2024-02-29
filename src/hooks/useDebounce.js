import { useEffect, useState } from "react"

export function useDebounceFn(value, delay=1000){
  const []
}


export function useDebounce(value, delay=500) {
    const [debouncedValue, setDebouncedValue] = useState(value)
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
  
      return () => {
        clearTimeout(timer)
      }
    }, [value, delay])
  
    return debouncedValue
  }