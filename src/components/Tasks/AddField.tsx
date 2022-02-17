import React, { FC, KeyboardEvent } from 'react';
import { FormEvent } from 'react';
import { onKeyEnter } from '../../helpers/onKeyEnter';
import { Todo } from '../../redux/types';

type AddFieldType = {
  onSubmit: (todo: Todo) => void;
  copyText: string;
};

export const AddField: FC<AddFieldType> = ({ onSubmit, copyText }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    setSearchTerm(copyText);
    inputRef?.current?.scrollIntoView();
    inputRef?.current?.focus();
  }, [copyText]);

  const addTask = () => {
    if (searchTerm !== '') {
      const todo = new Todo({
        text: searchTerm,
        completed: false,
        date: new Date().toLocaleString(),
      });
      setSearchTerm('');
      onSubmit(todo);
    } else {
      alert('Ошибка добавления, вы ничего не написали');
    }
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyEnter(e, addTask);
  };
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  return (
    <div className="task__add-field">
      <input
        placeholder="Введите текст"
        value={searchTerm}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        ref={inputRef}
      />
      <button onClick={addTask} className="task__add-field-button">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_i)">
            <path
              d="M12.5 0C12.9144 0 13.3118 0.16462 13.6049 0.457646C13.8979 0.750671 14.0625 1.1481 14.0625 1.5625V10.9375H23.4375C23.8519 10.9375 24.2493 11.1021 24.5424 11.3951C24.8354 11.6882 25 12.0856 25 12.5C25 12.9144 24.8354 13.3118 24.5424 13.6049C24.2493 13.8979 23.8519 14.0625 23.4375 14.0625H14.0625V23.4375C14.0625 23.8519 13.8979 24.2493 13.6049 24.5424C13.3118 24.8354 12.9144 25 12.5 25C12.0856 25 11.6882 24.8354 11.3951 24.5424C11.1021 24.2493 10.9375 23.8519 10.9375 23.4375V14.0625H1.5625C1.1481 14.0625 0.750671 13.8979 0.457646 13.6049C0.16462 13.3118 0 12.9144 0 12.5C0 12.0856 0.16462 11.6882 0.457646 11.3951C0.750671 11.1021 1.1481 10.9375 1.5625 10.9375H10.9375V1.5625C10.9375 1.1481 11.1021 0.750671 11.3951 0.457646C11.6882 0.16462 12.0856 0 12.5 0V0Z"
              fill="black"
              fillOpacity="0.3"
            />
          </g>
          <defs>
            <filter
              id="filter0_i"
              x="0"
              y="0"
              width="25"
              height="29"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
          </defs>
        </svg>
      </button>
    </div>
  );
};
