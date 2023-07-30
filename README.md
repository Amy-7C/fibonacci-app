# Take Home Challenge
## Plan
- Initial setup of React on the frontend and Express on the backend with Postgresql
### Frontend
- Create a simple form
- Form accepts an arbitrary number n, which makes a 'get' request to the backend to retrieve the first 'n' fibonacci numbers as a comma-separated list
### Backend
- Create a table with a column 'index' and 'value', where 0 is actually the first fibonacci number and so on.
- Populate the first two fibonacci numbers.
- When a 'get' request is made to retrieve 'n' fibonacci numbers, we will first query the db to retrieve all the values up to n. If the number of results returned is equal to n, then we can return that as a comma-separated list/string back to the frontend. If the number of results is less than n, that means we can populate n - minus the results length for the indices that don't yet have values. We can also add these missing values to the results and return that back to the frontend in the correct format.
