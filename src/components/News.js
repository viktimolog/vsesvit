import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

const Styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '20vh',
    margin: '2%',
    border: '1px',
    borderStyle: 'solid',
    borderColor: '#ff829e',
}

const image = 'http://vsesvit.pro/wp-content/uploads/2018/07/CC8K5242_.jpg'

const News = () => (
    <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <Card style={Styles}>
            <div style={{
                display: 'flex',
                width: '30%'
            }}>
                <CardMedia>
                    <img style={{display: 'flex', width: '115%'}} src={image} alt=""/>
                </CardMedia>
            </div>

            <div style={{
                display: 'flex',
                width: '70%',
                justifyContent: 'left',
                height: '100%',
                background: 'rgb(0,0,0,0.8)',
                marginLeft: '4%'
            }}>
                <CardContent style={{marginLeft: '2%'}}>

                    <Typography gutterBottom component="p">2018-07-09</Typography>

                    <Typography color="primary" gutterBottom variant="title"
                                component="h1">Новому аэропорту - новую современную компьютерную технику</Typography>
                    <Typography component="p">Компания "Всесвит" продолжает оснащать запорожский аэропорт компьютерной
                        техникой</Typography>

                </CardContent>

                <CardActions>
                    <Button
                        style={{margin: 0}}
                        size="small"
                        color="secondary"
                        variant="contained"
                    >
                        <a style={{color: 'orange'}} href="http://vsesvit.pro/new-airport-new-modern-comp/"
                           target='_blank'>Далее</a>
                    </Button>
                </CardActions>

            </div>
        </Card>
    </div>

)

export default News