import Overlay from "../../overlay";

const withOverlay = (Component) => ({ isLoading, ...rest }) => {
  if (isLoading) return <Overlay />;
  return <Component {...rest} />;
};
export default withOverlay;
