import React from 'react';

const Background = 'http://vsesvit.pro/wp-content/uploads/2018/06/system-integration-servers-small_orig.jpg'

const Dsi = () => (
    <div style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        height: '67.1vh',
        backgroundImage: `url(${Background})`,
        marginLeft: '14px'
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
                Компания "Всесвит" - украинский ИТ-интегратор Компания "Всесвит" - украинский ИТ-интегратор Компания
                "Всесвит" - украинский ИТ-интегратор Компания "Всесвит" - украинский ИТ-интегратор
            </p>
            <p><a style={{display: 'flex', color: 'orange', justifyContent: 'flex-end'}}
                  href="http://vsesvit.pro/system-integration" target='_blank'>детальнее</a></p>
        </div>
    </div>

)

export default Dsi