import { LinkComponent } from '@/components/atoms/LinkComponent';
import { CharacterSelectComponent } from '@/components/organisms/CharacterSelectComponent';
import { NextPage } from 'next';
import React from 'react';

const CharacterSelectPage: NextPage = () => {
  return (
    <>
      <CharacterSelectComponent />
    </>
  );
};

export default CharacterSelectPage;
