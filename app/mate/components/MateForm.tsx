'use client';

import React from 'react';
import { useMateForm } from '../hooks/useMateForm';

import SubmitButton from './SubmitButton';
import TextInput from './TextInput';
import OptionSelector from './OptionSelector';

export default function MateForm() {
  const { formState, handleInputChange, handleOptionSelect } = useMateForm();

  const handleSubmit = () => {
    console.log('폼 제출:', formState);
  };

  return (
    <div className="px-24 flex flex-col gap-16">
      <h2 className="font-semibold text-20 py-14">매칭 글 작성하기</h2>

      <div className="flex flex-col gap-30">
        <TextInput
          label="제목"
          placeholder="제목을 입력해 주세요."
          value={formState.title}
          onChange={handleInputChange}
          name="title"
        />

        <OptionSelector
          options={['성별', '연령', '직관일자', '응원팀', '모집인원']}
          selectedOptions={formState.options}
          onSelect={handleOptionSelect}
        />

        <TextInput
          label="내용"
          placeholder="내용을 작성해 주세요."
          value={formState.content}
          onChange={handleInputChange}
          name="content"
          multiline={true}
        />

        <TextInput
          label="연락 수단"
          placeholder="ex. 오픈카톡 링크, 카카오톡 아이디)"
          value={formState.contact}
          onChange={handleInputChange}
          name="contact"
        />

        <SubmitButton onClick={handleSubmit} label="등록하기" />
      </div>
    </div>
  );
}
