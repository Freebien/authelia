import React from "react";

import { Grid, makeStyles, Button } from "@material-ui/core";
import { useHistory } from "react-router";

import LoginLayout from "../../../layouts/LoginLayout";
import { LogoutRoute as SignOutRoute, UpdatePasswordRoute } from "../../../Routes";
import Authenticated from "../Authenticated";

export interface Props {
    name: string;
}

const AuthenticatedView = function (props: Props) {
    const style = useStyles();
    const history = useHistory();

    const handleLogoutClick = () => {
        history.push(SignOutRoute);
    };
    const handleUpdatePasswordClick = () => {
        history.push(UpdatePasswordRoute);
    };

    return (
        <LoginLayout id="authenticated-stage" title={`Hi ${props.name}`} showBrand>
            <Grid container>
                <Grid item xs={12}>
                    <Button color="secondary" onClick={handleLogoutClick} id="logout-button">
                        Logout
                    </Button>
                    <Button color="secondary" onClick={handleUpdatePasswordClick} id="update-password-button">
                        Update Password
                    </Button>
                </Grid>
                <Grid item xs={12} className={style.mainContainer}>
                    <Authenticated />
                </Grid>
            </Grid>
        </LoginLayout>
    );
};

export default AuthenticatedView;

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        border: "1px solid #d6d6d6",
        borderRadius: "10px",
        padding: theme.spacing(4),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));
