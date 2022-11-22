import React from "react";
import { Box, Typography } from '@mui/material';

export const Year = ({year, mes}) => {
    return (
        <Box>
            <Typography
                variant="h5" component="h5" color="white" fontWeight={600} textAlign="center" margin={5}>
                The month is {mes}, the year is {year}, </Typography>
        </Box>
    )
}