import { Outlet } from 'react-router-dom';
import style from './Home.module.css';
export function Home() {
  return (
    <main className={style.container}>
      <Outlet />
    </main>
  );
}
