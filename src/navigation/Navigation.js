import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import LocalBarRoundedIcon from "@material-ui/icons/LocalBarRounded";
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
<<<<<<< HEAD
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import FontDownloadRoundedIcon from '@material-ui/icons/FontDownloadRounded';
import ExploreRoundedIcon from '@material-ui/icons/ExploreRounded';

=======
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import FontDownloadRoundedIcon from "@material-ui/icons/FontDownloadRounded";
import ExploreRoundedIcon from "@material-ui/icons/ExploreRounded";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import UserPanel from "../user-panel/UserPanel";
>>>>>>> 649fb50aaa21e8614cf3d3ca5e63288cc82282e6

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: "auto"
  },
  list: {
    width: 500
  },
  fullList: {
    width: "auto"
  }
});

export function Navbar(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

<<<<<<< HEAD
=======
  const toggleDrawer = (side, open) => event => {
    // if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //     return;
    // }

    setState({ ...state, [side]: open });
  };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
        >
            <List>
                <UserPanel logout={props.logout} loginValue={props.loginValue} loginOnChange={props.loginOnChange} loginUser={props.loginUser} loggedUserId={props.loggedUserId} onToggle={toggleDrawer} />
            </List>
        </div>
    );

>>>>>>> 649fb50aaa21e8614cf3d3ca5e63288cc82282e6
    return (
        <AppBar>
            <Paper square className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor='secondary'
                    textColor='secondary'
                >
                    <Tab icon={<LocalBarRoundedIcon />} label="drinki" component={Link} to="/"></Tab>
                    <Tab icon={<ShoppingCartRoundedIcon />} label="sklepy" component={Link} to="/shops"></Tab>
                    <Tab icon={<FontDownloadRoundedIcon />} label="alcomat" component={Link} to="/alcomat"></Tab>
                    <Tab icon={<ExploreRoundedIcon />} label="mapa" component={Link} to="/map"></Tab>
                    <Tab icon={<AccountCircleRoundedIcon />} label="konto" component={Link} to="/UserPanel"></Tab>
                </Tabs>
            </Paper>
        </AppBar>
    );
}
