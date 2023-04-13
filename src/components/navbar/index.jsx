import {
  AppBar,
  Toolbar,
  CssBaseline,
//   makeStyles,
  Typography,
  useTheme,
  Box
} from "@mui/material";
import {makeStyles} from '@mui/styles'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserLoggedOut } from "../../store/slices/userSlice";
import DrawerComponent from "./drawer";


const useStyles = makeStyles((theme) => ({
  navbar:{ backgroundColor:'#1A2038'},
  navlinks: { marginLeft: theme.spacing(10), display: "flex" },
  logo: { flexGrow: "1", cursor: "pointer", fontWeight:'bold', color:'white' },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "14px",
    marginLeft: theme.spacing(2),
    "&:hover": { color: "yellow", borderBottom: "1px solid yellow" }
  }
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = false;
  const dispatch = useDispatch();

  return (
    <Box className={classes.navbar}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h5" className={classes.logo}>
          HEALTHPOINT
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="#" className={classes.link} onClick={() => {if(window.confirm('Confirm Log out?')) dispatch(setUserLoggedOut())}}>
              LOGOUT
            </Link>
          </div>
        )}
      </Toolbar>
    </Box>
  );
}

export default Navbar;
