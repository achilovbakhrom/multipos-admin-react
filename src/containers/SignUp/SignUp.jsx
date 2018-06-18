import React from "react";

// core components
import Wizard from "../../components/Wizard/Wizard.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import ItemGrid from "../../components/Grid/ItemGrid.jsx";

import SignUpStep from "./Steps/SignUpStep.jsx";
import ConfirmationStep from "./Steps/ConfirmationStep.jsx";

class SignUp extends React.Component {

    signUp(username, password) {

    }

    render() {
        return (
            <div>

                <GridContainer justify="center">
                    <ItemGrid sm={12} xs={11} md={5}>

                        <Wizard
                            validate
                            defaultPage = {0}
                            nextButtonClasses="hidden"
                            steps={[
                                {
                                    stepName: "Sign Up",
                                    stepComponent: SignUpStep,
                                    stepId: "signUp",
                                    componentProps: {
                                        signUpHandler: this.signUp.bind(this),
                                        errorMessage: "",
                                        
                                    }
                                },
                                {
                                    stepName: "Confirmation",
                                    stepComponent: ConfirmationStep,
                                    stepId: "confirmation"
                                }
                            ]}

                            title="Sign Up & Confirm"
                            subtitle="This information will let us know more about you."
                            color="info"
                        />

                    </ItemGrid>
                </GridContainer>
            </div>


        );
    }
}

export default SignUp;

