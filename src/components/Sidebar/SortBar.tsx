import SingleSelect from "../UI/SingleSelect";

type SortBarProps = {
  selectedSortingValue: string;
  setSelectedSortingValue: (value: string) => void;
};

const SortBar = ({
  selectedSortingValue,
  setSelectedSortingValue,
}: SortBarProps) => {
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
