import React, { useEffect, useRef, useState } from "react";
import Close from "../Icons/Close";
import { Container, Tag, Delete, Search } from "./styles";

const SearchInput = ({ projects, handleUpdateProjects }) => {
  const [searches, setSearches] = useState([]);
  const inputRef = useRef();
  const [focused, setFocused] = React.useState(false);
  const hasSearches = searches.length;

  function onFocus() {
    setFocused(true);
  }
  function onBlur() {
    setFocused(false);
  }

  useEffect(() => {
    if (!hasSearches) handleUpdateProjects(projects);

    if (hasSearches) {
      const newProjects = projects.filter((project) => {
        const hasSomething = Object.values(project).some((value) => {
          if (typeof value === "string") {
            return searches.some((search) =>
              value.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())
            );
          }
          return false;
        });
        return hasSomething;
      });
      handleUpdateProjects(newProjects);
    }
  }, [searches]);

  function handleKeyDown(event) {
    const search = event.target.value;
    if (event.key === "Enter" && search) {
      setSearches((prev) => [...prev, search]);
      event.target.value = "";
    }
  }

  function handleRemoveSearch(removeIndex) {
    const updatedSearches = searches.filter(
      (_, index) => index !== removeIndex
    );
    setSearches(updatedSearches);
  }

  function handleFocusInput() {
    inputRef.current.focus();
  }

  return (
    <Container onClick={handleFocusInput} $isFocused={focused}>
      {searches.map((search, index) => (
        <Tag key={`tag-${index}`}>
          {search}
          <Delete
            type="button"
            aria-label={`Remove search ${search}`}
            onClick={() => handleRemoveSearch(index)}
          >
            <Close />
          </Delete>
        </Tag>
      ))}
      <Search
        ref={inputRef}
        placeholder="Type your search here..."
        onKeyDown={handleKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </Container>
  );
};

export default SearchInput;
