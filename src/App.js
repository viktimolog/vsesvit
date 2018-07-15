import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BigHeader from './components/BigHeader'
import Dsi from './components/Dsi'
import Dp from './components/Dp'
import News from './components/News'
import ImageLink1 from './components/ImageLink1'
import ImageLink2 from './components/ImageLink2'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function FullWidthGrid(props) {
    const {classes} = props;

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            position: 'absolute',
            margin: 0,
            background: 'rgb(255, 113, 19)'
        }}>
            <Grid container>
                <Grid item xs={12}>
                    <BigHeader/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Dsi/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Dp/>
                </Grid>
                <Grid item sm={6}>
                    <News/>
                </Grid>
                <Grid item sm={3}>
                    <ImageLink1/>
                </Grid>
                <Grid item sm={3}>
                    <ImageLink2/>
                </Grid>
            </Grid>
        </div>
    );
}

FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);