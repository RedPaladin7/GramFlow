import { FastForward, House, Settings, Workflow } from "lucide-react"
import React from "react"
import {v4 as uuid} from 'uuid'

type FieldProps = {
    label: string 
    id: string 
}

type SideBarProps = {
    icon: React.ReactNode
} &FieldProps

export const SIDEBAR_MENU: SideBarProps[] = [
    {
        id: uuid(),
        label: 'home',
        icon: <House/>
    },
    {
        id: uuid(),
        label: 'automations',
        icon: <FastForward/>
    },
    {
        id: uuid(),
        label: 'integrations',
        icon: <Workflow/>
    },
    {
        id: uuid(),
        label: 'settings',
        icon: <Settings/>
    }
]