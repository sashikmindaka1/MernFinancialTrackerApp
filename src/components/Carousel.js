import React from 'react';
import { Box } from '@mui/material';

function HeroBanner() {
    return (
        <Box 
            sx={{ 
                width: '100vw',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                
                /* 🚨 Navbar එකට යටින් රිංගන එක නවත්තන්න Laptop වලට 120px සහ Phone වලට 70px දුන්නා */
                marginTop: { xs: '70px', md: '82px' }, 
                
                /* Thilakawardhana ඉමේජ් එකේ හැඩය (Aspect Ratio) */
                aspectRatio: '1920 / 525', 
                overflow: 'hidden'
            }}
        >
            <Box
                component="img"
                /* 🚨 public/assests/ ඇතුළේ තියෙන ඔයාගේ පළවෙනි පින්තූරේ කෙලින්ම ගත්තා */
                src="/assests/carousel12.jpg"
                alt="Hero Banner"
                sx={{
                    width: '100%',
                    height: '100%',
                    /* 🚨 අකුරු කිසිම එකක් කැපෙන්නේ නැතුව ස්ක්‍රීන් එකට Fit වෙන මැජික් එක */
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                }}
            />
        </Box>
    );
}

export default HeroBanner;