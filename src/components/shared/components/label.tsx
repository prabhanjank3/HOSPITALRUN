import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    label:{fontSize:'20px',fontWeight:'600',marginBottom:theme.spacing(1), textDecorationLine:'underline', marginLeft:theme.spacing(0)}
}))

export default ({text}:{text:string}) => {
    const classes = useStyles();
    return (<h5 className={classes.label}>{text}</h5>)
}