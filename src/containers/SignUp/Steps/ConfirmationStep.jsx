import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components

import customSelectStyle from "../../../assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";
import customCheckboxRadioSwitch from "../../../assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.jsx";
import MailOutlite from "@material-ui/icons/MailOutline";
import VpnKey from "@material-ui/icons/VpnKey";
import GridContainer from "../../../components/Grid/GridContainer";
import ItemGrid from "../../../components/Grid/ItemGrid";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Button from "../../../components/CustomButtons/Button";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  choiche: {
    textAlign: "center",
    cursor: "pointer",
    marginTop: "20px"
  },
  ...customSelectStyle,
  ...customCheckboxRadioSwitch
};

class ConfirmationStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleSelect: "",
      desgin: false,
      code: false,
      develop: false
    };
  }
  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  isValidated() {
    return true;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
          <GridContainer justify="center">
              <GridContainer justify="center">
                  <ItemGrid xs={1} sm={1} style={{
                      marginTop: "auto"
                  }}>
                      <MailOutlite />
                  </ItemGrid>
                  <ItemGrid xs={10} lg={10}>
                      <CustomInput
                          success={this.state.lastnameState === "success"}
                          error={this.state.lastnameState === "error"}
                          labelText={
                              <span>
                        Email <small>(required)</small>
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
              <GridContainer justify="center">
                  <ItemGrid xs={1} sm={1} style={{
                      marginTop: "auto"
                  }}>
                      <VpnKey />
                  </ItemGrid>
                  <ItemGrid xs={10} lg={10}>
                      <CustomInput
                          success={this.state.lastnameState === "success"}
                          error={this.state.lastnameState === "error"}
                          labelText={
                              <span>
                        Access Code <small>(required)</small>
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
              <GridContainer justify="center" >
                  <ItemGrid xs={10} sm={10} >
                    <p style={{marginTop: "30px", textAlign:"center"}} > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </ItemGrid>
              </GridContainer>
              <GridContainer justify="center" >
                  <ItemGrid style={{marginTop: "30px"}} > <Button color="info"> Confirm </Button> </ItemGrid>
              </GridContainer>
          </GridContainer>

      </div>
    );
  }
}

export default withStyles(style)(ConfirmationStep);
