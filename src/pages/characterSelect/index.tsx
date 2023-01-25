import { CharacterSelectComponent as CharacterSelectComponent } from '@/components/organisms/CharacterSelectComponent';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

const CharacterSelectPage: NextPage = () => {
  return (
    <>
      <CharacterSelectComponent />
      <Link href='./'>戻る</Link>
    </>
  );
};

export default CharacterSelectPage;
