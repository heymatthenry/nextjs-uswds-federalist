import React from 'react';

const SearchForm = ({ navigation, secondaryLinks }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const query = e.currentTarget.query.value;
  };

  return (
    <form className="usa-search usa-search-small" onSubmit={handleSubmit}>
      <div role="search">
        <label className="usa-sr-only" htmlFor="extended-search-field-small">
          Search small
        </label>
        <input
          className="usa-input usagov-search-autocomplete"
          id="extended-search-field-small"
          type="search"
          name="query"
          autoComplete="off"
        />
        <button className="usa-button" type="submit">
          <span className="usa-sr-only">Search</span>
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
