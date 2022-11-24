import { fireEvent, screen} from '@testing-library/react'
import React from 'react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { 
    renderWithTranslation 
} from '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation'
import { Sidebar } from './Sidebar'

describe ('Sidebar', () => {
    test('with test id', () => {
        componentRender(<Sidebar/>)
        expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    })

    test('toggle', () => {
        componentRender(<Sidebar/>)
        const toggleBtn = screen.getByTestId("sidebar-toggle")
        expect(screen.getByTestId("sidebar")).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
    })

})