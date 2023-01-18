import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export default function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts of name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
