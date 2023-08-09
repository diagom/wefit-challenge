import { useEffect, useState } from 'react';
import S from './styles';

interface amountMoviesInput {
  initialValue: number;
  movieId: number;
  handleChangeSetValue: Function;
}

const AmountMoviesInput = ({
  initialValue,
  movieId,
  handleChangeSetValue,
}: amountMoviesInput) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChange = (event: any) => {
    setValue(event.target.value);
    handleChangeSetValue(movieId, parseFloat(event.target.value));
  };

  return (
    <S.quantityInput
      type="number"
      value={value}
      onChange={handleChange}
    />
  );
};

export default AmountMoviesInput;
