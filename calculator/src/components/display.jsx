import PropTypes from 'prop-types';
const Display = ({ displayValue }) => {
    return (
        <input id="display" type="text" value={displayValue} readOnly />
    );
};

Display.propTypes = {
    displayValue: PropTypes.string.isRequired,
};

export default Display;