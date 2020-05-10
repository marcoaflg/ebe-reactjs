import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: '01',
        imgPath:
            'https://azgovernor.gov/sites/default/files/styles/panopoly_image_original/public/stayhome-graphicartboard_12x.png?itok=sff8CNKj',
    },
    {
        label: '02',
        imgPath:
            'https://news.stlpublicradio.org/sites/kwmu/files/styles/x_large/public/202003/032920_DK_CovidStayHome.png',
    },
    {
        label: '03',
        imgPath:
            'https://www.click2houston.com/resizer/z-qNtNWab5HLtw3Lg9QNcVSb5Ts=/1600x1066/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/arc-anglerfish-arc2-prod-gmg.s3.amazonaws.com/public/VM2HHRCMJBFS7BBIXV2QKQUNG4.jpg',
    },
    {
        label: '04',
        imgPath:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKR5fipMC3nkHEtvb3LK55WCE7n67FCJguFQ_UhYYpnN7r-PsN&usqp=CAU',
    },
    {
        label: '05',
        imgPath:
            'https://1.bp.blogspot.com/-EbM9ctRpmcg/XnJBNKQ_FaI/AAAAAAAAVaQ/YTmQwpG_IbAx1OkAiMisMD3Dl2g-umFcgCLcBGAsYHQ/s1600/BeLikeKevin_Meme.jpg',
    },
];

const styles = theme => ({
    root: {
        maxWidth: 1500,
        flexGrow: 1,
        margin: 'auto',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 100,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 900,
        display: 'block',
        maxWidth: 1500,
        overflow: 'hidden',
        width: '100%',
        paddingTop: 30,
    },
});

class Slider extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };

    render() {
        const { classes, theme } = this.props;
        const { activeStep } = this.state;
        const maxSteps = tutorialSteps.length;
        return (
            <div className={classes.root}>
                {/* <Paper square elevation={0} className={classes.header}>
                    <Typography>{tutorialSteps[activeStep].label}</Typography>
                </Paper> */}
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={this.handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <img className={classes.img} src={step.imgPath} alt={step.label} />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position=""
                    activeStep={activeStep}
                    className={classes.mobileStepper}
                    nextButton={
                        <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>

                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        </Button>
                    }
                />
            </div>
        );
    }
}
Slider.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Slider);