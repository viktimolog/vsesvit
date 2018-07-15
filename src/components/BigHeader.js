import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField'


export default class BigHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    stringHandler = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }


    render() {
        return (
            <div style={{
                display: 'flex',
                // width: '98%',
                flexDirection: 'row',
                // margin: '1%',
                margin: '15px',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '5vh'
            }}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h1 style={{color: 'white', fontSize: '34px', margin: '0'}}>
                        VSESVIT.PRO
                    </h1>
                    <p style={{color: 'white', margin: '0', fontSize: '14px'}}>
                        Вселенная современных технологий
                    </p>
                </div>
                {/*<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '30%'}}>*/}
                <div style={{display: 'flex', flexDirection: 'row', borderRadius: '50px',flexBasis: '350px', justifyContent: 'space-between'}}>
                    <p><a style={{color: 'white'}} href="http://vsesvit.pro/company-page/" target='_blank'>О
                        компании</a></p>
                    <p><a style={{color: 'white'}} href="http://vsesvit.pro/news-page/" target='_blank'>Новости</a></p>
                    <p><a style={{color: 'white'}} href="http://vsesvit.pro/vacancies-page/"
                          target='_blank'>Вакансии</a></p>
                    <p><a style={{color: 'white'}} href="http://vsesvit.pro/contact-page/" target='_blank'>Контакты</a>
                    </p>
                </div>
                <TextField
                    style={{
                        border: '1px',
                        borderStyle: 'solid',
                        padding: '8px',
                        background: 'white',
                    }}
                    type="search"
                    value={this.state.search}
                    placeholder='Поиск на сайте'
                    onChange={this.stringHandler('search')}
                />
            </div>
        )
    }
}

