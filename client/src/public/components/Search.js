import { Input } from "semantic-ui-react";
const SearchForm = ({onSearch}) => {
    return(
      <Input
      action={{ color: 'blue', content: 'Search' }}
      icon='search'
      iconPosition='left'
      placeholder='Search Restaurant'
      onChange={onSearch}
    />
  )
}

export default SearchForm;