import { Box, Button, Grid, Card } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index";
import { Navigate } from "react-router-dom";
import { authenticateUser } from "../../store/actions/userActions";
import { styled } from '@mui/system';
import { useRef } from "react";
import logo from "../../assets/logo.png";
import "./style.css";
import OneForm from "../forms/OneForm";
import loginFields from "../forms/fields/login";

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  position: 'relative',
  background: 'white',
}));

const JWTRoot = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100vh !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 400,
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
  },
}));


export default () => {
  const dispatch = useDispatch<any>();
  const submitRef = useRef<HTMLAnchorElement>();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  const onSubmit = (values:any) => {
    dispatch(authenticateUser(values))
  };
  // onSubmit({role:'DOCTOR', email:'anuja641997@gmail.com'})
  // onSubmit({role:'PATIENT', email:'prabhanjank3@gmail.com'})
  return isLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <JWTRoot>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <JustifyBox p={4} height="100%" sx={{ minWidth: 320 }}>
              <img src="/assets/dreamer.svg" width="100%" alt="" />
            </JustifyBox>
          </Grid>

          <Grid item sm={6} xs={12}>
          <Box className="login-form-box">
            <img src={logo} alt="Logo" className="form-logo" />
            <ContentBox>
            <Box component="form" noValidate sx={{ mt: 2 }}>
              <OneForm ref={submitRef} fieldSet={loginFields} handleSubmit={onSubmit} 
              renderActionButtons = 
              {<Button ref={submitRef} variant="contained" fullWidth>Sign In</Button>}
                />
            </Box>
            </ContentBox>
          </Box>
          </Grid>
        </Grid>
      </Card>
    </JWTRoot>
  );
};
