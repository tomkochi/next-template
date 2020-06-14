const Layout = (props) => {
  const { yellowfooter } = props;
  return <div className="layout">{props.children}</div>;
};

export default Layout;
