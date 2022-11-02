import {render, screen} from '@testing-library/react'
import { Sidebar } from './Sidebar'

describe ('Sidebar', () => {
    test('btn', () => {
       
        // eslint-disable-next-line i18next/no-literal-string
        render(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

  

})