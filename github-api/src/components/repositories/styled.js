import styled from 'styled-components'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
`
WrapperTabList.tabsRole = 'TabList'

export const WrapperTab = styled(Tab)`
  border: 1px solid #ccc;
  padding: 8px;
  user-select: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-bottom: 1px solid white;
  }
`

WrapperTabList.tabRole = 'Tab'

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  padding: 8px;
  margin-top: -5px;
  margin-left: 4px;
  border: 1px solid #ccc;
  &.is-selected {
    display: block;
    background-color: white;
  }
`

WrapperTabList.tabRole = 'TabPanel'

export const WrapperList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 20px;
`
