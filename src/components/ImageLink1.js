import React from 'react';

const image = 'http://vsesvit.pro/wp-content/uploads/2018/07/77801.jpg'

const ImageLink1 = () => (
    <div>
        <a href="http://vsesvit.pro/bank-ukraine-with-paper/" target='_blank'>
            <img style={{
                display: 'flex',
                marginTop: '4%',
                height: '20vh',
                width: '96%',
                top: '50%',
                left: '50%',
            }}
                 src={image} alt=""/>
        </a>
    </div>
)

export default ImageLink1