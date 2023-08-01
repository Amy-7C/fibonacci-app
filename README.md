# Take Home Challenge
## Running
- First run 'npm run create' in the backend folder to create and populate a postgresql table with initial values.
- After you can run 'npm run start' in the frontend folder, and 'npm run dev' in the backend folder to startup local servers.
## Plan
- Initial setup of React on the frontend and Express on the backend with Postgresql
- Created a table in Postgresql with columns 'index' and 'value'. 'index' has a unique constraint so there aren't multiple of the same indices. Index 0 maps to the number 1, index 1 maps to the number 2, and so on
- Populated the first two fibonacci numbers
### Frontend
- Create a simple form
- Form accepts an arbitrary number n, which makes a 'get' request to the backend to retrieve the first 'n' fibonacci numbers as a comma-separated list
- Displays the results as a comma-separated string on a different page 
### Backend
- When a 'get' request is made to retrieve 'n' fibonacci numbers, we will first query the db to retrieve all the values up to n.
    - If the number of results returned is equal to n, then we can return that as a comma-separated string back to the frontend.
    - If the number of results is not equal to n, that means we can populate all indices up to the number n (n-1) since it is 0-indexed. We can also add these missing values to the results and return that back to the frontend in the correct format. Each missing value will be inserted into the database.
