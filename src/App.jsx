import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieSearch from './pages/MovieSearch';
import MovieDetail from './pages/MovieDetail';

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MovieSearch />} />
        <Route path="/movieDetail/:id" element={<MovieDetail />} />
      </Routes>
    </main>
  );
}
