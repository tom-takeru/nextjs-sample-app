import { ReactNode } from 'react';
import FooterComponent from '../organisms/FooterComponent';
import HeaderComponent from '../organisms/HeaderComponent';

type Props = {
  children: ReactNode;
};

const LayoutComponent: React.FC<Props> = ({ children }) => {
  return (
    <div className='bg-gray-300'>
      <HeaderComponent />
      <main className='mx-auto max-w-screen-2xl'>{children}</main>
      <FooterComponent />
    </div>
  );
};

export default LayoutComponent;
