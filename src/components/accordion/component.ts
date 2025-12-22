import { JaxsTypes } from 'jaxs'

export const componentName = 'boot-jaxs:accordion'

export type AccordionState = {
  [accordionId: string]: {
    expandedItems: string[]
    alwaysOpen: boolean
  }
}

const initialState = {} as AccordionState

const getAccordionAndItemId = (eventName: string): [string, string] => {
  const parts = eventName.split(':')
  const accordionId = parts[2] || ''
  const itemId = parts[3] || ''
  return [accordionId, itemId]
}

export const toggleAccordionItem: JaxsTypes.BusListener<unknown> = (
  _payload: unknown,
  listenerKit: JaxsTypes.ListenerKit
) => {
  const { state, eventName } = listenerKit
  const store = state.store<AccordionState>(componentName)
  const [accordionId, itemId] = getAccordionAndItemId(eventName)
  
  const currentState = store.value[accordionId] || { expandedItems: [], alwaysOpen: false }
  const isExpanded = currentState.expandedItems.includes(itemId)
  
  let expandedItems: string[]
  if (currentState.alwaysOpen) {
    // In alwaysOpen mode, toggle the specific item
    expandedItems = isExpanded
      ? currentState.expandedItems.filter((id) => id !== itemId)
      : [...currentState.expandedItems, itemId]
  } else {
    // In normal mode, only one item can be expanded at a time
    expandedItems = isExpanded ? [] : [itemId]
  }
  
  store.update({
    ...store.value,
    [accordionId]: {
      ...currentState,
      expandedItems,
    },
  })
}

export const initializeAccordion: JaxsTypes.BusListener<{ 
  accordionId: string
  alwaysOpen: boolean
  expandedItems: string[]
}> = (payload, listenerKit: JaxsTypes.ListenerKit) => {
  const { state } = listenerKit
  const store = state.store<AccordionState>(componentName)
  const { accordionId, alwaysOpen, expandedItems } = payload
  
  store.update({
    ...store.value,
    [accordionId]: {
      alwaysOpen,
      expandedItems,
    },
  })
}
