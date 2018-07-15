import React from 'react';

const Background = 'http://vsesvit.pro/wp-content/uploads/2018/07/12353792999257.jpg'

const Dp = () => (
    <div style={{
        display: 'flex',
        width: '98%',
        justifyContent: 'center',
        height: '67.1vh',
        backgroundImage: `url(${Background})`
    }}>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '54%',
            alignSelf: 'center',
            color: 'white',
            background: 'rgb(0,0,0,0.8)',
            padding: '3%',

        }}>
            <p style={{color: 'orange', fontSize: '24px'}}>
                Системная ИТ-интеграция
            </p>
            <p style={{display: 'flex', margin: '-1%', color: 'white', fontSize: '14px'}}>
                Компания "Всесвит" - произаодитель и поставщик многих видов бумаги, произаодитель и поставщик многих
                видов бумаги, произаодитель и поставщик многих видов бумаги, произаодитель и поставщик многих видов
                бумаги
            </p>
            <p><a style={{display: 'flex', color: 'orange', justifyContent: 'flex-end'}}
                  href="http://vsesvit.pro/business-paper" target='_blank'>детальнее</a></p>
        </div>
    </div>

)

export default Dp