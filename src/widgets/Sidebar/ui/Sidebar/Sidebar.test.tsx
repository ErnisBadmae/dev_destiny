import { screen} from '@testing-library/react'
import React from 'react'
import { 
    renderWithTranslation 
} from '../../../../shared/lib/className/tests/renderWithTranslation'
import { Sidebar } from './Sidebar'

describe ('Sidebar', () => {
    test('btn', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId("custom-element")).toBeInTheDocument()
    })

  

})