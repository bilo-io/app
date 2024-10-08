export const assignments = {
    entertainment: `
# Assessment: Entertainment

## **Level**: Intermediate

### Task Summary

This task is to create a web interface that pulls data from an API and displays it on a map.
Furthermore, the user should use a form to filter the type of data being shown on the map.

    `,
    places: `
# Assessment: Maps & Places

## **Level**: Intermediate

## Task Summary

This task is to create a web interface that pulls data from an API and displays it on a map.
Furthermore, the user should use a form to filter the type of data being shown on the map.

## Design

### Requirements

- 1. Implement the proposed design as closely as possible
- 2. Create a webapplication using React and Typescript
- 3. What you use for styling is entirely up to you
  - > (we use StyledComponents, but I'm happy with \`Sass\`, \`Less\`, \`Tailwind\` etc.)
    >
- 4. The data should be fetched asynchronously (using a library of choice, or simply the built-in \`fetch\` is enough)
- 5. The UI form should allow for filtering of the data
- 6. The whole application should be hosted on [Vercel](https://vercel.app) and the source code should be shared via [Github](https://github.com/) for us to review

![screenshot]()

---

## API

We have provided a mock API to make the task a bit simpler.

API_BASE_URL: [https://api-octiv-test.vercel.app/](https://api-octiv-test.vercel.app/)

### Endpoints

You will be interested in the following endpoints:

<br />

---

| Endpoint              | Description                                        |
| :-------------------- | :------------------------------------------------- |
| GET \`/api/places/ \`    | Fetches a list of \`places\`, along with coordinates |
| GET \`/api/places/: id\` | Fetches a single \`place\` by ID                     |
---

### Sorting, Paging & Filtering

The "list" endpoints do support paging and filtering, both of which retrieve subsets of the data.

### Examples:

**Sorting**:
- **GET** \`/api/places?sortBy=name&sortDirection=desc\` would sort by the \`name\` field in \`desc\` (descending) order.
- > Note: \`sorting\` is done before \`paging\` or \`filtering\` for more commonly expected behaviour.

<br />

**Filtering**:
- **GET** \`/api/places?search=Don&filter[category]=food\`
- > This fetches all places which have the name \`"Don"\` and the category \`"food"\`

<br />

**Paging**:
- **GET** \`/ api/places?page=2&limit=3\`
- > This fetches up to a \`limit\` of \`3\` places, and if there are more, then it goes to the second set of 3 results (i.e. \`page\` being \`2\`)
  >
    `,
    schedule: `
    `
};