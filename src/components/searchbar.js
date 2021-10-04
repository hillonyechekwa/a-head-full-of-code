import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const SearchBar = (props) => {

  return (
    <form action="" className="search-form">
      <label htmlFor="blog-search">
        <FontAwesomeIcon icon={faSearch} size="5x"/>
      </label>
      <input
        type="text"
        aria-label="Search"
        placeholder="start typing to search for a post..."
        onChange={props.inputChange}
      />
    </form>
  )
}

export default SearchBar
