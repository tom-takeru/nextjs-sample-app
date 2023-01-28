import { LinkComponent } from '@/components/atoms/LinkComponent';

const FooterComponent: React.FC = () => {
  return (
    <>
      <div className='mx-auto max-w-screen-2xl'>
        <div className='mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12'>
          <div className='col-span-full lg:col-span-2'>
            <div className='mb-4 lg:-mt-2'>
              <LinkComponent href='/' text='Sample site' extraClassName='text-2xl text-blue-500' />
              <a
                href='/'
                className='inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl'
                aria-label='logo'
              ></a>
            </div>

            <p className='mb-6 text-gray-400 sm:pr-8'>
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>

            <div className='flex gap-4'>
              <LinkComponent
                href='https://github.com/tom-takeru/nextjs-sample-app'
                extraClassName='text-gray-400 hover:text-gray-500 active:text-gray-600'
              >
                <svg
                  className='h-5 w-5'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
              </LinkComponent>
            </div>
          </div>

          <div>
            <div className='mb-4 font-bold uppercase tracking-widest text-gray-100'>Products</div>

            <nav className='flex flex-col gap-4'>
              <div>
                <LinkComponent href='/characterSelect' text='CharacterSelect' />
              </div>
              <div>
                <LinkComponent href='/todoList' text='TodoList' />
              </div>
              <div>
                <LinkComponent href='/login' text='Login' />
              </div>
            </nav>
          </div>

          <div>
            <div className='mb-4 font-bold uppercase tracking-widest text-gray-100'>Company</div>

            <nav className='flex flex-col gap-4'>
              <div>
                <LinkComponent href='/characterSelect' text='CharacterSelect' />
              </div>
              <div>
                <LinkComponent href='/todoList' text='TodoList' />
              </div>
              <div>
                <LinkComponent href='/login' text='Login' />
              </div>
            </nav>
          </div>
          <div>
            <div className='mb-4 font-bold uppercase tracking-widest text-gray-100'>Support</div>

            <nav className='flex flex-col gap-4'>
              <div>
                <LinkComponent href='/characterSelect' text='CharacterSelect' />
              </div>
              <div>
                <LinkComponent href='/todoList' text='TodoList' />
              </div>
              <div>
                <LinkComponent href='/login' text='Login' />
              </div>
            </nav>
          </div>

          <div>
            <div className='mb-4 font-bold uppercase tracking-widest text-gray-100'>Legal</div>

            <nav className='flex flex-col gap-4'>
              <div>
                <LinkComponent href='/characterSelect' text='CharacterSelect' />
              </div>
              <div>
                <LinkComponent href='/todoList' text='TodoList' />
              </div>
              <div>
                <LinkComponent href='/login' text='Login' />
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className='max-w-screen-2xl'>
        <div className='border-t border-gray-200 py-8 text-center text-sm text-gray-400'>
          © 2023 - Present Sample site. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
