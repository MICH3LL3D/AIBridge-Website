const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "transparent",
        color: "white",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center", 
        marginLeft: '-4rem%',
        paddingTop: '2rem',
        paddingBottom: '3rem',
        width: "100%", 
      }}
    >
      <p>© {new Date().getFullYear()} AIBridge MK. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

  