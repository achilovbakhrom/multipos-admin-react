import React from "react";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
import Email from "@material-ui/icons/Email";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";

// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import ItemGrid from "../../../components/Grid/ItemGrid.jsx";
import CustomInput from "../../../components/CustomInput/CustomInput.jsx";
import PersonOutline from "@material-ui/icons/PersonOutline";
import LockOpen from "@material-ui/icons/LockOpen";
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
            firstname: "",
            firstnameState: "",
            lastname: "",
            lastnameState: "",
            email: "",
            emailState: ""
        };
    }

    // function that returns true if value is email, false otherwise
    verifyEmail(value) {
        var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRex.test(value)) {
            return true;
        }
        return false;
    }

    // function that verifies if a string has a given length or not
    verifyLength(value, length) {
        if (value.length >= length) {
            return true;
        }
        return false;
    }

    change(event, stateName, type, stateNameEqualTo) {
        switch (type) {
            case "email":
                if (this.verifyEmail(event.target.value)) {
                    this.setState({[stateName + "State"]: "success"});
                } else {
                    this.setState({[stateName + "State"]: "error"});
                }
                break;
            case "length":
                if (this.verifyLength(event.target.value, stateNameEqualTo)) {
                    this.setState({[stateName + "State"]: "success"});
                } else {
                    this.setState({[stateName + "State"]: "error"});
                }
                break;
            default:
                break;
        }
        this.setState({[stateName]: event.target.value});
    }

    isValidated() {
        // if (
        //   this.state.firstnameState === "success" &&
        //   this.state.lastnameState === "success" &&
        //   this.state.emailState === "success"
        // ) {
        //   return true;
        // } else {
        //   if (this.state.firstnameState !== "success") {
        //     this.setState({ firstnameState: "error" });
        //   }
        //   if (this.state.lastnameState !== "success") {
        //     this.setState({ lastnameState: "error" });
        //   }
        //   if (this.state.emailState !== "success") {
        //     this.setState({ emailState: "error" });
        //   }
        // }
        return true;
    }

    render() {
        const {classes} = this.props;
        return (
            <GridContainer justify="center">
                <GridContainer item xs={12} sm={12} justify="center">
                    <ItemGrid xs={1} sm={1} style = {{
                            marginTop: "auto"
                        }}>
                        <PersonOutline  />
                    </ItemGrid>
                    <ItemGrid lg={10} xs={10} >
                        <CustomInput
                            success={this.state.firstnameState === "success"}
                            error={this.state.firstnameState === "error"}
                            labelText={
                                <span>
                        First Name <small>(required)</small>
                      </span>
                            }
                            id="firstname"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                onChange: event => this.change(event, "firstname", "length", 3)
                            }}

                        />
                    </ItemGrid>
                </GridContainer>

                <GridContainer xs={12} sm={12} justify="center">
                    <ItemGrid xs={1} sm={1} style = {{
                        marginTop: "auto"
                    }}>
                        <LockOpen  />
                    </ItemGrid>
                    <ItemGrid xs={10} sm={10}>
                        <CustomInput
                            success={this.state.lastnameState === "success"}
                            error={this.state.lastnameState === "error"}
                            labelText={
                                <span>
                        Last Name <small>(required)</small>
                      </span>
                            }
                            id="lastname"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                onChange: event => this.change(event, "lastname", "length", 3),
                            }}
                        />
                    </ItemGrid>
                </GridContainer>

                <GridContainer xs={12} sm={12} justify="center">
                    <ItemGrid xs={1} sm={1} style = {{
                        marginTop: "auto"
                    }}>
                        <LockOpen  />
                    </ItemGrid>
                    <ItemGrid xs={10} sm={10}>
                        <CustomInput
                            success={this.state.lastnameState === "success"}
                            error={this.state.lastnameState === "error"}
                            labelText={
                                <span>
                        Last Name <small>(required)</small>
                      </span>
                            }
                            id="lastname"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                onChange: event => this.change(event, "lastname", "length", 3),
                            }}
                        />
                    </ItemGrid>
                </GridContainer>
                <ItemGrid xs={10} sm={10}
                          
                />
            </GridContainer>
        );
    }
}

export default withStyles(style)(SignUpStep);
