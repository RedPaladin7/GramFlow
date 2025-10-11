import { CircleStop, Instagram, Weight } from "lucide-react";
import React from "react";

type Props = {
    title: string
    icon: React.ReactNode 
    description: string 
    strategy: 'INSTAGRAM' | 'CRM'
}

export const INTEGRATION_CARDS: Props[] = [
    {
        title: 'Connect Instagram',
        description: 'Bla bla bla',
        icon: <CircleStop/>,
        strategy: 'INSTAGRAM'
    }, 
    {
        title: 'Connect Salesforce',
        description: 'bla bla bla',
        icon: <Weight/> ,
        strategy: 'CRM'
    }
]