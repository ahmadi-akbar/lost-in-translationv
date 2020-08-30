import React from 'react';

/**
 * Shows a given sprite from a sprite sheet based on character input.
 * Hacky code is based on  https://stackoverflow.com/questions/2430206/how-can-i-scale-an-image-in-a-css-sprite
 * @param {char} char
 * @returns {Object} Style object compatible with react.
 *
 */
const style = (char) => {
  const img = require('../asset/sign-spritesheet-1200.png');
  const { column, row } = calculateOffset(char);
  //Backgroundsize is calculated based on the number of columns and rows in the sprite
  //In this instance the sprite contains 8 columns and 4 rows, which gives 800% and 400% respectively
  return {
    height: '100%',
    width: '100%',
    backgroundImage: `url(${img})`,
    backgroundPosition: `${-(column * 100)}% ${-(row * 100)}%`,
    backgroundSize: '800% 400%',
  };
};

/**
 * if the alphabet is stored in alphabetically ordered way in a 8 * 4 grid, finds the column and row number.
 * 0 indexed.
 * @param {Char} char
 * @returns {column, row} indexes of the char provided.
 * Space will recieve column: 2, row: 3
 * Other special characters: column 2, row: 3
 * Made public so it can be tested with unit tester
 */
export const calculateOffset = (char) => {
  const charLowerCase = char.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz ';
  const charIndex = alphabet.indexOf(charLowerCase);
  if (charIndex === -1) {
    return {
      column: 2,
      row: 3,
    };
  }
  //8 characters in each row
  return {
    column: charIndex % 8,
    row: Math.floor(charIndex / 8),
  };
};

/**
 * Used in order to shrink the sprites
 */
const containerStyle = {
  height: '50px',
  width: '50px',
  display: 'inline-block',
};

/**
 * Renders a single signlanguage char based on props.char.
 * @param {Char} props.char - required, must be a single character
 */
function Handsign(props) {
  return (
    <React.Fragment>
      <div style={containerStyle}>
        <div style={style(props.char)}></div>
      </div>
    </React.Fragment>
  );
}

export default Handsign;
