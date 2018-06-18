import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "material-ui/Progress/CircularProgress";
import withStyles from 'material-ui/styles/withStyles';

import loadingStyle from '../../assets/jss/material-dashboard-pro-react/components/loadingStyle';

class Loading extends React.Component {

    constructor() {
        super();

    }

    render() {
        const {
            classes,
            show
        } = this.props
        console.log("loading: " + show)

        if (!show) {
            return (
                <div></div>
            )
        } else {
            return (
                <div className={classes.backgroundStyle}>
                    <CircularProgress className={classes.progressStyle} />
                </div>
            )
        }

    }
}

Loading.PropTypes = {
    show: PropTypes.bool
};

export default withStyles(loadingStyle)(Loading);
