import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

import { Stack } from '@mui/system';
import { Box, Button, IconButton } from '@mui/material';

import { drawerWidth } from './SideBar';
import UserAccountSkeleton from '../Cards/Skeleton/UserAccountSkeleton';

const AccountMenu = React.lazy(() => import('./UserNatification'))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  handleDrawerOpen: () => any;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: 'rgb(24, 24, 24)',
  boxShadow: 'none',
  backdropFilter: "blur(1220px)",
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AdminAppBar = (props: AppBarProps) => {
  return (
    <AppBar
      position="fixed"
      open={props.open}
      handleDrawerOpen={props.handleDrawerOpen}
    >
      <Toolbar className='app_bar'
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(props.open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          display="flex"
          alignItems={'center'}
          justifyContent="space-between"
          width={'100%'}
          marginRight="20px"
          pt={1}
        >

          <Stack direction={'row'} gap={2}>
            <Box>
              <KeyboardArrowLeftOutlinedIcon sx={{ fontSize: '33px', cursor: 'pointer' }} />
            </Box>
            <Box>
              <KeyboardArrowRightOutlinedIcon sx={{ fontSize: '33px', cursor: 'pointer' }} />
            </Box>
          </Stack>

          <Stack direction={'row'} alignItems="center" gap="1px">
            <Box display={{ xs: 'none', sm: 'flex' }}>
              <Button variant="outlined" sx={{ borderRadius: '20px' }}>Сменить тариф</Button>
            </Box>
            <React.Suspense fallback={<UserAccountSkeleton />}>
              <AccountMenu />
            </React.Suspense>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar >
  );
};

export default AdminAppBar;
