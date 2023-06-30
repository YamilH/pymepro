import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const Loader: React.FC = () => {
  const { palette } = useTheme();
  return (
    <div>

      <Box
        component="div"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        color={palette.grey[300]}
      >
        <div>
        <AutoGraphIcon 
          sx={{ 
            fontSize: "130px"
          }}

          />
        <Typography 
          variant="h4" 
          fontSize="32px"
          color={palette.grey[300]}
          fontWeight= "500"
          >
          PymePro
        </Typography>

        </div>
      </Box>

    </div>
  );
}

export default Loader;
