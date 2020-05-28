import {createContext} from 'react'

type TContextApp = {
    pass: string
}

const ContextApp = createContext<TContextApp>({} as TContextApp)

export default ContextApp