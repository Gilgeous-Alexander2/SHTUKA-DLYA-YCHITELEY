import SearchIcon from '@mui/icons-material/Search';
import TemporaryDrawer from './Drawer';

function Header(props){
    return <>
      <div className='header'>
        <div style={{display:'flex',gap:'50px'}}>
          <TemporaryDrawer/>
            <div style={{display:'flex',gap:'20px'}}>
              <props.CButton><SearchIcon fontSize='large'/></props.CButton>
              <div style={{display:'flex',alignItems:'center',fontSize:'25px',fontWeight:'600',color:'white'}}>Bbook</div>
            </div>
        </div>
  
        <div style={{display:'flex',flexGrow:'1'}}></div>
        <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
          <input style={{borderRadius:'25px',height:'25px',width:'200px',border: 'none'}}></input>
          <SearchIcon/>
        </div>
      </div>
      </>
  }

  export default Header;