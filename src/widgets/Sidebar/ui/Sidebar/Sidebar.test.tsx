<<<<<<< HEAD
import { screen} from '@testing-library/react'
import React from 'react'
import { 
    renderWithTranslation 
} from '../../../../shared/lib/className/tests/renderWithTranslation'
=======
import {render, screen} from '@testing-library/react'
>>>>>>> 42ac3708aeea6dff982cd57be0f12f71bc44ffad
import { Sidebar } from './Sidebar'

describe ('Sidebar', () => {
    test('btn', () => {
<<<<<<< HEAD
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId("custom-element")).toBeInTheDocument()
=======
       
        // eslint-disable-next-line i18next/no-literal-string
        render(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
>>>>>>> 42ac3708aeea6dff982cd57be0f12f71bc44ffad
    })

  

})