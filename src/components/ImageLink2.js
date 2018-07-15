import React from 'react';

const image = 'http://vsesvit.pro/wp-content/uploads/2018/06/progress.jpg'

const ImageLink2 = () => (
    <div style={{display: 'flex', height: '20vh', width: '100%', justifyContent: 'center'}}>
        <a href="http://vsesvit.pro/computers-for-progress/" target='_blank'>
            <img style={{display: 'flex', marginTop: '4%', height: '100%', width: '96%'}} src={image} alt=""/>
        </a>
    </div>

)

export default ImageLink2