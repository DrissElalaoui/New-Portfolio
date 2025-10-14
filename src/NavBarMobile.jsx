import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {  useTheme } from "next-themes";
export default function NavBarMobile() {
    const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(newOpen);
  };

  const menuItems = [
    { text: 'Home', icon: <i style={{ color: theme === "dark" ? "#EEE" : "#000" }} className="fa-solid fa-house"></i>, link: '#homme' },
    { text: 'About', icon: <i style={{ color: theme === "dark" ? "#EEE" : "#000" }} className="fa-solid fa-address-card"></i>, link: '#AboutMe' },
    { text: 'Skills', icon: <i style={{ color: theme === "dark" ? "#EEE" : "#000" }} className="fa-solid fa-laptop-code"></i>, link: '#Skilles' },
    { text: 'Services', icon: <i style={{ color: theme === "dark" ? "#EEE" : "#000" }} className="fa-solid fa-briefcase"></i>, link: '#Services' },
    { text: 'Projects', icon: <i style={{ color: theme === "dark" ? "#EEE" : "#000" }} className="fa-solid fa-diagram-project"></i>, link: '#Projects' },
    { text: 'Contact', icon: <i style={{ color: theme === "dark" ? "#EEE" : "#000" }} className="fa-solid fa-address-book"></i>, link: '#Contact' },
    { text: 'Contribution', icon: <i style={{ color: theme === "dark" ? "#EEE" : "#000" }} className="fa-solid fa-handshake"></i>, link: '#Contributions' },
    { text: 'Footer', icon: <i style={{ color: theme === "dark" ? "#EEE" : "#000" }} className="fa-solid fa-shoe-prints"></i>, link: '#Footer' },
    { text: '', icon: <div onClick={ () => {setTheme(theme === "dark" ? "light" : "dark")}} style={{ width: '350px'  }}><button    style={{width: '30px' , height: '30px' , borderRadius: '50%' , border: 'none'  ,  cursor: 'pointer' ,  display: 'flex' , alignItems: 'center' , justifyContent: 'center'}}><i style={{fontSize: '18px' }} className={ theme === "light" ? 'fa-solid fa-moon':'fa-solid fa-bolt' }></i></button></div>, link: '#' },
  ];

  const handleNavigate = (link) => {
    setOpen(false);
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const DrawerList = (
    <Box  sx={{ width: 250, height: '100%', backgroundColor: (theme === "light" ? "#EEE" : "#000") }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton  onClick={() => handleNavigate(item.link)}>
              <ListItemIcon sx={{ color: '#000' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText   primaryTypographyProps={{style: { color: theme === "dark" ? "#EEE" : "#000" }}} primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      
    </Box>
  );

  return (
    <div className='iconButtonMobile'>
      {/* ✅ Utilisation de IconButton au lieu de Button pour éviter tout comportement de formulaire */}
      <Button 
        onClick={toggleDrawer(true)}
        sx={{
          position: 'fixed',
          top: '15px',
          left: '-10px',
          zIndex: '9',
          backgroundColor: '#48bbd4'
        }}
      >
        <i  className="fa-solid fa-bars" style={{ fontSize: '25px' }}></i>
      </Button>

      <Drawer sx={{zIndex: '999' }}  open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}