This React project demonstrates an interactive search and filter functionality using components like `SearchBox`, `ResultsDisplay`, and `FilterOptions`. The main tools and features used include:

### Tools and Libraries Used:
1. **React** - The core framework for building the components and managing state.
2. **useState Hook** - Utilized to manage state for search queries, filter options, and search results.
3. **Tailwind CSS** - For styling, providing a modern and responsive layout with utility-first CSS classes.
4. **JavaScript Array Methods** - `filter()` and `includes()` are used to filter the data based on search and category.
5. **SVG Icons** - For the search icon inside the input field.

### Features:
- **Search Functionality**: The `SearchBox` component allows users to type a query to filter the articles based on their titles. The search updates the results dynamically.
- **Filter Functionality**: The `FilterOptions` component provides pre-defined categories (Frontend, Backend, Design, and Database). Users can filter articles by category, with a clear button to reset the filter.
- **Dynamic Results Display**: The `ResultsDisplay` component dynamically displays the filtered search results. It handles cases where no results match the search or filters, displaying a message like "No results found".
- **Responsive Design**: The layout adapts to different screen sizes, using Tailwind's grid system and responsive classes to arrange the search results in a single column (on small screens) or multiple columns (on larger screens).
- **Clear Filters**: The ability to clear the filter, making the search results show all items again.

Overall, this project is structured to allow for easy interaction, smooth user experience, and responsive design, with the main goal of filtering and displaying content dynamically based on user input.
