/* eslint-disable i18next/no-literal-string */
import { Button, ThemeButton } from 'shared/ui/Buttons/Button';
import {render, screen} from '@testing-library/react'

describe ('button', () => {
    test('btn', () => {
       
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()
      
        //расширение tsx когда манипуляции идут с обьектами элементов?
        // tsx когда ты внутри используешь компонент, когда отрисовываешь компонент, со времимен будет для тебя как хотьба) даже не задумываясь будешь ставить)
        // да, но по моему там не было опций для настройки как работать в каких файлах. Я исключил это правило для всех файлов у которых в названии есть ".test.". В ключе owerrides. Но ты все же поищи такое правило в оф источнике) может и я что то пропустил
    })

    test('check render class', () => {
       
        render(<Button theme={ThemeButton.CLEAR}>test</Button>)
        expect(screen.getByText('test')).toHaveClass('clear')
        screen.debug()
      
    })

})