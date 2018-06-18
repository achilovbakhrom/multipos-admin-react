import React from "react";
// @material-ui/icons
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import ItemGrid from "../../../components/Grid/ItemGrid.jsx";
import CustomInput from "../../../components/CustomInput/CustomInput.jsx";
import PersonOutline from "@material-ui/icons/PersonOutline";
import LockOpen from "@material-ui/icons/LockOpen";
import Button from "../../../components/CustomButtons/Button";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {
    signUp,
    rtEmailValidation,
    rtPasswordValidation,
    rtPasswordConfirmationValidation
} from "../../../actions/SignUpAction";
import CircularProgress from 'material-ui/Progress/CircularProgress'

const style = {
    infoText: {
        fontWeight: "300",
        margin: "10px 0 30px",
        textAlign: "center"
    },
    inputAdornmentIcon: {
        color: "#555"
    },
    inputAdornment: {
        top: "3px",
        position: "relative",
    }
};

class SignUpStep extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            emailFirstTime: true,
            passwordFirstTime: true,
            confirmPasswordFirstTime: true
        };
    }

    change(event, stateName) {
        switch(stateName) {
            case 'email':
                this.setState({
                    email: event.target.value,
                    emailFirstTime: false
                });
                this.props.rtEmailValidation(event.target.value);
                break;
            case 'password':
                this.setState({
                    password: event.target.value,
                    passwordFirstTime: false
                });
                this.props.rtPasswordValidation(event.target.value, this.state.confirmPassword);
                break;
            case 'confirmPassword':
                this.setState({
                    confirmPassword: event.target.value,
                    confirmPasswordFirstTime: false
                });
                this.props.rtPasswordConfirmationValidation(event.target.value, this.state.password);
                break;
            default:
                break;
        }
    }

    isValidated() {
        return true;
    }

    signUpButtonClicked() {
        this.setState({
            emailFirstTime: false,
            passwordFirstTime: false,
            confirmPasswordFirstTime: false
        });
        this.props.signUp(this.state.email, this.state.password, this.state.confirmPassword)
    }

    render() {
        let errorMessage = this.props.errorMessage;
        let emailInput;
        if (this.props.isEmailValid || this.state.emailFirstTime) {
            emailInput = (
                <CustomInput
                    labelText={
                        <span>Email <small>(required)</small></span>
                    }
                    id="email"
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        onChange: (event) => this.change(event, 'email')
                    }}
                />
            )
        } else {
            emailInput = (
                <CustomInput
                    error = {true}
                    labelText={
                        <span>Email <small>(required)</small></span>
                    }
                    id="email"
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        onChange: event => this.change(event, 'email')
                    }}
                />
            )
        }

        let passwordInput;
        if (this.props.isPasswordCorrect || this.state.passwordFirstTime) {
            passwordInput = (
                <CustomInput
                    labelText={
                        <span> Password <small>(required)</small></span>
                    }
                    id="password"
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        onChange: event => this.change(event, "password"),
                        type: "password",
                    }}
                />
            )
        } else {
            passwordInput = (
                <CustomInput
                    error={true}
                    labelText={
                        <span> Password <small>(required)</small></span>
                    }
                    id="password"
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        onChange: event => this.change(event, "password"),
                        type: "password",
                    }}
                />
            );
        }

        let passwordConfirmationInput;
        if (this.props.isPasswordConfirmationCorrect || this.state.confirmPasswordFirstTime) {
            passwordConfirmationInput = (
                <CustomInput
                    type="password"
                    labelText={
                        <span> Confirm password <small>(required)</small></span>
                    }
                    id="confirmPassword"
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputType="password"
                    inputProps={{
                        onChange: event => this.change(event, "confirmPassword"),
                        type: "password"
                    }}
                />
            )
        } else {
            passwordConfirmationInput = (
                <CustomInput
                    error={true}
                    type="password"
                    labelText={
                        <span> Confirm password <small>(required)</small></span>
                    }
                    id="confirmPassword"
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputType="password"
                    inputProps={{
                        onChange: event => this.change(event, "confirmPassword"),
                        type: "password"
                    }}
                />
            );
        }

        let progress;
        if (this.props.isRequestBegin) {
            progress = (<CircularProgress
                size={30}
            />)
        }

        return (
            <GridContainer justify="center">
                <p style={{
                    color:"#ff0000"
                }}> {errorMessage} </p>
                <GridContainer justify="center" >
                    <ItemGrid xs={1} sm={1} style = {{ marginTop: "auto"}}>
                        <PersonOutline  />
                    </ItemGrid>
                    <ItemGrid lg={10} xs={10} >
                        { emailInput }
                    </ItemGrid>
                </GridContainer>

                <GridContainer justify="center">
                    <ItemGrid xs={1} sm={1} style = {{
                        marginTop: "auto"
                    }}>
                        <LockOpen  />
                    </ItemGrid>
                    <ItemGrid xs={10} sm={10}>
                        { passwordInput }
                    </ItemGrid>
                </GridContainer>

                <GridContainer justify="center">
                    <ItemGrid xs={1} sm={1} style = {{ marginTop: "auto" }}><LockOpen  />
                    </ItemGrid>
                    <ItemGrid xs={10} sm={10}>
                        { passwordConfirmationInput }
                    </ItemGrid>
                </GridContainer>

                <GridContainer justify="center" style={{ marginTop: "30px" }}>
                    <ItemGrid>
                        <Button
                            color="info"
                            onClick={this.signUpButtonClicked.bind(this)}
                            disabled={this.props.isRequestBegin}
                        > Sign Up </Button>
                        {progress}
                    </ItemGrid>
                </GridContainer>
            </GridContainer>
        );
    }
}

SignUpStep.propTypes = {
    signUp: PropTypes.func,
    rtEmailValidation: PropTypes.func,
    rtPasswordValidation: PropTypes.func,
    rtPasswordConfirmationValidation: PropTypes.func,
    setPage: PropTypes.func

};


export default withStyles(style)(connect(mapStateToProps, mapDispatchToProps)(SignUpStep));
