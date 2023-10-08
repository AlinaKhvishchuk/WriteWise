import MultipleSelect from "./MultipleSelect";

type FilterBarProps = {
  currTopics: string[];
  selectedTopics: string[];
  setSelectedTopics: (topics: string[]) => void;
};

const FilterBar = ({
  currTopics,
  selectedTopics,
  setSelectedTopics,
}: FilterBarProps) => {
  if (!currTopics.length) return null;

  return (
    <MultipleSelect
      options={currTopics}
      selectedValues={selectedTopics}
      handleChange={setSelectedTopics}
    />
  );
};

export default FilterBar;
