import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from 'components';
import { HomePage, AddContactPage } from 'views';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/add" element={<AddContactPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
