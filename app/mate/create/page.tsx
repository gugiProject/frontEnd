import React from 'react';
import PageHeader from '../components/PageHeader';
import MateForm from '../components/MateForm';

export default function MateCreatePage() {
  return (
    <>
      <PageHeader title={'직관 메이트 구하기'} />
      <MateForm />
    </>
  );
}
