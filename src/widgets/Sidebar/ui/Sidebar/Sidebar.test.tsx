import { fireEvent, screen} from '@testing-library/react'
import React from 'react'
import { 
    renderWithTranslation 
} from '../../../../shared/lib/className/tests/renderWithTranslation'
import { Sidebar } from './Sidebar'

describe ('Sidebar', () => {
    test('with test id', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId("custom-element")).toBeInTheDocument()
    })

    test('toggle', () => {
        renderWithTranslation(<Sidebar/>)
        const toggleBtn = screen.getByTestId("sidebar-toggle")
        expect(screen.getByTestId("custom-element")).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId("custom-element")).toHaveClass("collapsed")
    })

})