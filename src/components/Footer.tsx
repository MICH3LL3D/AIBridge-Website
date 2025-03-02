const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "transparent",
        color: "#d2d4d6",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center", 
        paddingTop: '2rem',
        paddingBottom: '3rem',
        width: "100%", 
      }}
    >
      <p>© {new Date().getFullYear()} AIBridge M. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

  