

//Components

const  Footer = ({ length }) => {
    const today = new Date();  

  return (

    <footer>
      <div style={{
        fontSize :'40px',
        fontWeight: 'Bold',

      }}>
     { length } {length === 1 ? 'item' : 'items'} on list  

      </div>
     <p>Copyright &copy; {today.getFullYear()}</p>

    </footer>
  );
}

export default Footer;
