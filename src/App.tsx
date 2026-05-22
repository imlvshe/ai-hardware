import { useState } from 'react';
import Login from './components/Login';
import CourseContent from './components/CourseContent';
import { checkAccess } from './auth';

export default function App() {
  const [accessKey, setAccessKey] = useState('');

  if (checkAccess(accessKey)) {
    return <CourseContent accessKey={accessKey} />;
  }

  return <Login onUnlock={setAccessKey} />;
}
