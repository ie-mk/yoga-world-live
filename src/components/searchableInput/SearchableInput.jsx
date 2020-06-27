import React, { useState } from 'react';
import Styled from './SearchableInput.styles';
import { Field } from 'formik';

const SearchableInput = ({
  options = [],
  callback,
  name,
  width,
  label,
  placeholder,
}) => {
  const [selected, setSelected] = useState(null);
  const [showOptions, setShowOptions] = useState(true);
  const [searchString, setSearchString] = useState(null);
  const [activeOption, setActiveOption] = useState(0);

  const matchingOptions = options.filter(opt =>
    opt.toLowerCase().includes(searchString && searchString.toLowerCase()),
  );

  console.log('------activeOption: ', activeOption);
  console.log('------matchingOptions: ', matchingOptions);
  console.log('------searchString: ', searchString);

  function handleKeyDown(event) {
    console.log('event.keyCode: ', event.keyCode);
    // arrow down key
    if (event.keyCode === 40) {
      activeOption < matchingOptions.length - 1 &&
        setActiveOption(activeOption + 1);
    }
    if (event.keyCode === 38) {
      activeOption > 0 && setActiveOption(activeOption - 1);
    }

    if ((event.charCode || event.keyCode) === 13) {
      setSearchString(matchingOptions[activeOption]);
      setShowOptions(false);
      event.preventDefault();
    }
  }

  return (
    <Styled.Wrapper width={width} onKeyDown={handleKeyDown}>
      <Styled.Label>{label}</Styled.Label>
      <input
        name={name}
        onChange={e => {
          setShowOptions(true);
          setSearchString(e.target.value);
          callback(e.target.value);
          setActiveOption(0);
        }}
        type="text"
        value={selected || searchString}
        placeholder={placeholder}
      />
      {showOptions && searchString && matchingOptions ? (
        <Styled.OptionsContainer>
          {matchingOptions.map((opt, idx) => (
            <Styled.Option key={idx} active={activeOption === idx}>
              {opt}
            </Styled.Option>
          ))}
        </Styled.OptionsContainer>
      ) : null}
    </Styled.Wrapper>
  );
};

export default SearchableInput;
