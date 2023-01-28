import { LinkComponent } from '@/components/atoms/LinkComponent';
import { NextPage } from 'next';

const MainPage: NextPage = () => {
  return (
    <div className=''>
      <ul className='max-w-md divide-y divide-gray-200'>
        <li className='pb-3'>
          <div className='flex items-center space-x-4'>
            <div className='flex-shrink-0'>
              <img className='h-8 w-8 rounded-full' alt='CharacterSelect' src='https://random.imagecdn.app/v1/image' />
            </div>
            <div className='min-w-0 flex-1'>
              <LinkComponent
                href='/characterSelect'
                extraClassName='truncate text-sm font-medium text-gray-900'
                text='CharacterSelect'
              />
              <div className='truncate text-sm text-gray-500'>Select character from a, b and c.</div>
            </div>
          </div>
        </li>
        <li className='pb-3'>
          <div className='flex items-center space-x-4'>
            <div className='flex-shrink-0'>
              <img className='h-8 w-8 rounded-full' alt='CharacterSelect' src='https://random.imagecdn.app/v1/image' />
            </div>
            <div className='min-w-0 flex-1'>
              <LinkComponent
                href='/todoList'
                extraClassName='truncate text-sm font-medium text-gray-900'
                text='TodoList'
              />
              <div className='truncate text-sm text-gray-500'>Manage your todo.</div>
            </div>
          </div>
        </li>
        <li className='pb-3'>
          <div className='flex items-center space-x-4'>
            <div className='flex-shrink-0'>
              <img className='h-8 w-8 rounded-full' alt='CharacterSelect' src='https://random.imagecdn.app/v1/image' />
            </div>
            <div className='min-w-0 flex-1'>
              <LinkComponent href='/login' extraClassName='truncate text-sm font-medium text-gray-900' text='Login' />
              <div className='truncate text-sm text-gray-500'>Login here.</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MainPage;
