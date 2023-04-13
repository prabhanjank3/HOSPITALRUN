import { useSelector } from "react-redux";

const withLoadingStateOn = (Component) => (props) => {
  if (props.isLoading) return <div>Loading..</div>;
  return <Component {...props} />;
};

export { withLoadingStateOn };
