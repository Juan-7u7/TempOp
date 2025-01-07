import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Chip } from '@mui/material';

const CustomCard = ({ title, user, description, requirements, salary, image, isRecommended, onInterestClick, onApplyClick }) => {
  return (
    <Card sx={{ maxWidth: 400, margin: 'auto', boxShadow: 'none', borderRadius: 3, padding: 2, backgroundColor: '#FFFFFF', border: 'none' }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          {image && (
            <CardMedia
              component="img"
              sx={{ width: 50, height: 50, borderRadius: '50%', marginRight: 2 }}
              image={image}
              alt="User avatar"
            />
          )}
          <Box>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user}
            </Typography>
          </Box>
        </Box>
        {isRecommended && <Chip label="Recomendado" color="secondary" />}
      </Box>

      <CardContent>
        <Typography variant="h6" gutterBottom>
          Descripción
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>

        <Typography variant="h6" gutterBottom>
          Requisitos
        </Typography>
        <ul>
          {requirements.map((req, index) => (
            <li key={index}>
              <Typography variant="body2" color="text.secondary">
                {req}
              </Typography>
            </li>
          ))}
        </ul>

        <Typography variant="h6" gutterBottom>
          Salario
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ backgroundColor: '#F8F9FA', padding: 1, borderRadius: 2, marginY: 2 }}>
          <Typography variant="h5" color="text.primary">
            {salary}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-around" marginTop={2}>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#F06292', color: '#FFFFFF', '&:hover': { backgroundColor: '#EC407A' } }}
            onClick={onInterestClick}
          >
            Me interesa
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#AB47BC', color: '#FFFFFF', '&:hover': { backgroundColor: '#8E24AA' } }}
            onClick={onApplyClick}
          >
            Aplicar
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
