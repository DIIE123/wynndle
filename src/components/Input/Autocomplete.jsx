import ImageComponent from "../Utils/ImageComponent";
import "./Autocomplete.css";

function Autocomplete({ value, guessArray, handleClick, searchArray }) {
  const filteredArray = searchArray.filter((item) => {
    const itemName = item.internalName.toLowerCase();
    const valueName = value.toLowerCase().trim();

    return (
      (itemName.startsWith(valueName) ||
        itemName.split(" ").some((word) => word.startsWith(valueName))) &&
      !(guessArray.some((guess) => guess.internalName === item.internalName))
    );
  });

  if (value && filteredArray.length > 0) {
    return (
      <div className="autocomplete">
        {filteredArray.map((item) => (
          <div
            key={item.internalName}
            onClick={handleClick}
            data-name={item.internalName}
          >
            <ImageComponent object={item} width="32" height="32" />
            <p className={item.rarity}>{item.internalName}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Autocomplete;
