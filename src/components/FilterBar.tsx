import MultipleSelect from "./MultipleSelect";
import { useEffect, useState } from "react";
import { fetchTopics } from "../../utils";

const FilterBar = ({
  currTopics,
  selectedTopics,
  selectedAuthors,
  setSelectedTopics,
  setSelectedAuthors,
}) => {
  if (!currTopics.length) return null;

  if (currTopics) {
    return (
      <MultipleSelect
        options={currTopics}
        selectedValues={selectedTopics}
        handleChange={setSelectedTopics}
      />
    );
  }
};

export default FilterBar;
