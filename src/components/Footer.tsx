const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "transparent",
        color: "#e0e0e0",
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

  