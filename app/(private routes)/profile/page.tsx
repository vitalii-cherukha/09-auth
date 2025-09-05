import Image from 'next/image';
import css from './ProfilePage.module.css';
import Link from 'next/link';
import { getMe } from '@/lib/api/serverApi';

const Profile = async () => {
  const user = await getMe();

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href={'/profile/edit'} className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.avatarWrapper}>
          <Image
            src={user.avatar}
            alt={user.username}
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>
        <div className={css.profileInfo}>
          <p>{`Username: ${user.username}`}</p>
          <p>{`Email: ${user.email}`}</p>
        </div>
      </div>
    </main>
  );
};

export default Profile;
