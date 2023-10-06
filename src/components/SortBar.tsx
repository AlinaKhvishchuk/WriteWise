import SingleSelect from "./SingleSelect";

const SortBar = ({ selectedSortingValue, setSelectedSortingValue }) => {
  const sortingOptions = ["id", "title", "date"];
  //   if (!currTopics.length) return null;

  return (
    <SingleSelect
      options={sortingOptions}
      selectedValues={selectedSortingValue}
      handleChange={setSelectedSortingValue}
    />
  );
};

export default SortBar;
