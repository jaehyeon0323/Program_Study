import React from 'react'
import { TodoItemProps } from './types'
import { TodoDispatches } from './types'

export const TodoStateContext = React.createContext<TodoItemProps[] | undefined>(undefined)
export const TodoDispatchContext = React.createContext<TodoDispatches | undefined>(undefined)
