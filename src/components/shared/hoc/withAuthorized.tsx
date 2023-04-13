const withAuthorized = (Component) => ({ isAuthorized = false, ...rest }) => {
  if (!isAuthorized) {
    return <div>User is not authorized</div>;
  }
  return <Component {...rest} />;
};
export default withAuthorized;
