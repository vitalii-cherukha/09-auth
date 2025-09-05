import Link from 'next/link';
import css from './AuthNavigation.module.css';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store/authStore';
import TagsMenu from '../TagsMenu/TagsMenu';
import { logout } from '@/lib/api/clientApi';

const AuthNavigation = () => {
  const router = useRouter();
  const { user, isAuthenticated, clearIsAuthenticated } = useAuthStore();
  const handleClickLogOut = async () => {
    await logout();
    clearIsAuthenticated();
    router.push('/sign-in');
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <li>
            <TagsMenu />
          </li>
          <li className={css.navigationItem}>
            <Link
              href={'/profile'}
              prefetch={false}
              className={css.navigationLink}
            >
              Profile
            </Link>
          </li>
          <li className={css.navigationItem}>
            <p className={css.userEmail}>{user?.email}</p>
            <button
              type="button"
              onClick={handleClickLogOut}
              className={css.logoutButton}
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li className={css.navigationItem}>
            <Link
              href={'/sign-in'}
              prefetch={false}
              className={css.navigationLink}
            >
              Login
            </Link>
          </li>
          <li className={css.navigationItem}>
            <Link
              href={'/sign-up'}
              prefetch={false}
              className={css.navigationLink}
            >
              Sign up
            </Link>
          </li>
        </>
      )}
    </>
  );
};

export default AuthNavigation;
