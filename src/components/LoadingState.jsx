import React from 'react';
import './LoadingState.css';

export const LoadingState = ({ message = 'Cargando...' }) => (
  <div className="loading-state">
    <div className="loading-spinner"></div>
    <p>{message}</p>
  </div>
);

export const EmptyState = ({ message = 'No hay datos disponibles' }) => (
  <div className="empty-state">
    <p>{message}</p>
  </div>
);

