import { Container, Grid, Skeleton } from '@mui/material';
import React from 'react';

const SkeletonCards = () => {
  return (
    <>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 5 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
          pt={5}
          justifyContent="center"
        >
          {Cards.map((i) => (
            <Grid item xs={2} sm={4} key={i.id}>
              <Skeleton
                variant="rectangular"
                width={'100%'}
                height={130}
                sx={{ borderTopRightRadius: '20px', borderTopLeftRadius: '20px' }}
              />
              <Skeleton variant="rectangular" width={'100%'} height={130} />
              <Skeleton
                variant="rectangular"
                width={'100%'}
                height={130}
                sx={{
                  borderBottomLeftRadius: '20px',
                  borderBottomRightRadius: '20px',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default SkeletonCards;

const Cards = [
  {
    id: Math.random()
  },
  {
    id: Math.random()
  },
  {
    id: Math.random()
  },
  {
    id: Math.random()
  },
  {
    id: Math.random()
  },
  {
    id: Math.random()
  },
]