import { createContext, ReactNode } from 'react'
import { useLocalStore } from 'mobx-react-lite'
import { RootStore } from '../../model/RootStore'

export const StoreContext = createContext<RootStore>(undefined)

export class StoreProvideProps {
  children: ReactNode
}

const StoreProvider = ({ children }: StoreProvideProps): JSX.Element => {
  const store = useLocalStore(() => new RootStore())
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreProvider
