import React from "react";

// core components
import Wizard from "../../components/Wizard/Wizard.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import ItemGrid from "../../components/Grid/ItemGrid.jsx";

import SignUpStep from "./Steps/SignUpStep.jsx";
import ConfirmationStep from "./Steps/ConfirmationStep.jsx";

class SignUp extends React.Component {
    render() {
        return (
            <GridContainer justify="center">
                <ItemGrid sm={9} xs={7} md={5} >
                    <Wizard
                        validate
                        steps={[
                            {
                                stepName: "Sign Up",
                                stepComponent: SignUpStep,
                                stepId: "signUp"
                            },
                            {
                                stepName: "Confirmation",
                                stepComponent: ConfirmationStep,
                                stepId: "confirmation"
                            }
                        ]}
                        title="Build Your Profile"
                        subtitle="This information will let us know more about you."
                        color="info"
                    />
                </ItemGrid>
            </GridContainer>
        );
    }
}

export default SignUp;

