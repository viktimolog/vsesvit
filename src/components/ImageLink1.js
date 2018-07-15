import React from 'react';

const image = 'http://vsesvit.pro/wp-content/uploads/2018/07/77801.jpg'

const ImageLink1 = () => (
    <div style={{display: 'flex', height: '20vh', width: '100%', justifyContent: 'center'}}>
        <a href="http://vsesvit.pro/bank-ukraine-with-paper/" target='_blank'>
            <img style={{display: 'flex', marginTop: '4%', height: '100%', width: '96%'}} src={image} alt=""/>
        </a>
    </div>

)

export default ImageLink1