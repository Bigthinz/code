import { useState } from 'react'

const useFormHook = (initailValue) => {
    const [ value, setValue ] = useState(initailValue)

    const handleChange = (e)=>[
        setValue(e.target.value)

    ]
    return [ value, handleChange ]
}

export default useFormHook
