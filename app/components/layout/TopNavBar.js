import Image from 'next/image';
import ThemeToggle from '../ui/ThemeToggle';

export default function TopNavBar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image
              src="/images/profile-picture.jpg"
              alt="Profile Picture"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="ml-3 text-xl font-semibold text-gray-800 dark:text-white">
              Your Name
            </span>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
