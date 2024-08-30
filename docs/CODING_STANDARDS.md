# CODING STANDARDS

- [CODING STANDARDS](#coding-standards)
  - [Backend Coding Standards](#backend-coding-standards)
    - [Project structure](#project-structure)
    - [Examples](#examples)
  - [Frontend Coding Standards](#frontend-coding-standards)
    - [Project Structure](#project-structure-1)
    - [React component](#react-component)
      - [Dumb Components](#dumb-components)
      - [Container Components](#container-components)
      - [Vision App Features](#vision-app-features)
    - [Redux Toolkit](#redux-toolkit)
  - [Redux](#redux)
    - [Redux slice](#redux-slice)
    - [Redux actions](#redux-actions)


## Backend Coding Standards

### Project structure

- **controllers/**:
  - Contains the business logic and handles incoming requests.
- **middlewares/**:
  - Houses middleware functions to process incoming requests.
- **models/**:
  - Defines data models and interfaces.
- **repositories/**:
  - Provides a data access layer, abstracting database operations.
- **routes/**:
  - Defines API routes and connects them to the appropriate controllers.
- **services/**:
  - Contains reusable business logic and complex operations.
  - **NOTE**: `services/apis/` is for external API integrations
- **utils/**:
  - Contains utility functions that can be used throughout the application.

![project-architecture](https://www.coreycleary.me/_next/static/media/Express-REST-API-Struc.aa7ecaa0c41dbb7344c70665a5f5e259.png)

> [Reference](https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way)

### Examples

`src/server.ts`:

> Application entry point

```ts
import express from 'express'
//...
const app: Express = express();
const port = process.env.PORT;
//...
app.use(require('./routes'));
//...
app.listen(port, () => {
    console.log(`⚡️[server]: http://localhost:${port}`);
});
```
---

`src/routes/example-router.ts`:

> Feature router

```ts
import { Router } from 'express'
import controller from '../controllers/example-controller'

const router = Router()

// NB:
// - The endpoint path is defined in the specific router
// - The base router just combines all with path "/"
// - So don't create redundant routes like "/api/example/api/example"
const endpoint = '/api/example'

router.get(`${endpoint}/`, controller.list)
router.get(`${endpoint}/:id`, controller.get)
router.post(`${endpoint}/`, controller.create)
router.put(`${endpoint}/:id`, controller.update)
router.delete(`${endpoint}/:id`, controller.delete)

module.exports = router
```

---

`src/routes/index.ts`:

> Application router combines all feature routers

```ts
import { Router } from "express";

const router = Router()

// import sub-routers
const example1 = require('./example-router')
const example2 = require('./example2-router')
const example3 = require('./example3-router')
// ... other feature routes

// link to app router
router.use('/', example1);
router.use('/', example2);
router.use('/', example3);
// ... link other feature routes

module.exports = router;
```

---

`src/controllers/example-controller.ts`:

> Feature controller

```ts
import ExampleService from '../services/example-service'
import { IExample } from "../models/example-models"

// CRUD controller actions
const controller = {
    list: async (req: Request, res: Response) => {
      try {
        const data = await ExampleService.getExamples()
        res.status(200).send(data);
      } catch (error) {
        res.status(500).send({
          message: 'Server encountered a problem',
          error,
        })
      }
    },
    find: async (req: Request, res: Response) => {
      // ...
    },
    create: async (req: Request, res: Response) => {
      //...
    },
    update: async (req: Request, res: Response) => {
      // ...
    },
    delete: async (req: Request, res: Response) => {
      // ...
    },
}

export default controller;
```

---

`src/models/example-models.ts`:

> All models (types/interfaces) relevant to the example feature

```ts
export interface IExample {
    id: string | number;
    name: string;
    data?: any;
    // ... other properties
}

// ... other models
```

---

`src/services/example-service.ts`:

> Feature service, handles business logic and integrates with other, external integrations

```ts
import { IExample } from "../models/example-models"
import exampleStore from '../repositories/example-repository'

export const getExamples = ({
    userId
}: {
    userId: number | string
}): IExample[] => {
    return exampleStore.getAll(userId);
}

export const findExample = ({
    id,
    userId,
}: {
    id: number | string,
    userId: number | string ,
}): IExample => {
    let data: IExample = exampleStore.find(id, userId);

    return data;
}

// ...

export default {
    getExamples,
    findExample,
    // ...
}
```

---

`src/store/example-store.ts`

> The layer that deals with data access & persistence

```ts
// TODO:
// - integrate MongoDB
// - integrate other ways of storing data (e.g. firebase)
// - use dependency injection for the storage interface
```

## Frontend Coding Standards

### Project Structure

|                |                                                                           |
| :------------- | :------------------------------------------------------------------------ |
| **assets**     | Contains static assets like images, fonts, and other media files.         |
| **components** | Reusable UI components used across the application.                       |
| **features**   | Higher-level features or modules of the application, each                 | containing related components and logic. |
| **hooks**      | Custom React hooks used throughout the application.                       |
| **models**     | Data models or interfaces used to define the shape of data                | objects.                                 |
| **pages**      | Top-level pages or views of the application.                              |
| **services**   | Functions or classes that handle API calls and data                       | manipulation.                            |
| **store**      | Main entry point and configuration for the React application.             |
| **styles**     | Additional CSS or Sass files for styling specific components or features. |
| **utils**      | Utility functions or helper modules used throughout the application.      |

### React component

We distinguish between a variety of components:

- Dumb Components
  - Components with minimal internal state, and mainly used for the presentation layer
- Smart Components / Containers
  - Components that perform a bit of internal logic
- Vision App Feature
  - The major features are aliased a Vision App Feature
  - These are the major features/sidebar tabs, and also the main `slices` in the DB

#### Dumb Components

> Use the `rfc` keyboard snippet to produce:

```jsx
import React from 'react';

interface ExampleProps {

}

export const Example: React.FC<ExampleProps> = () => {
    return (
        <div>Example</div>
    );
};

export default Example;
```

#### Container Components

```jsx
const ComponentTemplate = ({ arg1 }: { arg1: any }) => {
    // #region HOOKS
    const lang = useAppLanguage();
    const theme = useAppTheme();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    // #endregion

    // #region TRANSLATIONS
    const commonMessages = translations[lang].common;
    const viewMessages = translations[lang].myView;
    // #endregion

    // #region STORE
    const { holdings } = useSelector((state: RootState) => state.characters);
    // #endregion

    // #region STATE
    const [loading, setLoading] = useState<boolean>(false);
    // #endregion

    // #region HANDLERS / HELPERS
    const onSubmit = () => {
        // use state to submit
    }
    // #endregion

    // #region LIFECYCLE
    useEffect(() => {
        //initial state if dependency array is []
        console.log('isMounting')

        // return a function for logic when unmounting
        return () => {
            console.log('isUnmounting')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        // runs every time any of the vars in the dependency array get updated
        console.log('UPDATE=>STORE: state.dashboard.characters', characters);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [characters])
    // #endregion

    // #region STYLE
    // #endregion

    return (
        <View>
          <Async
            isLoading={loading}
            error={error}
          >
             <View>
                <Text>{JSON.stringify(characters.data)}</Text>
            </View>
          </Async>
        </View>
    )
}
```

#### Vision App Features

A Vision app feature is basically just a [Container](#container-components), with a specific view component, to provide a consistent interaction mechanism.

```jsx
() => (
    <SplitView
      emptyView={
        // ... the default state of the view, with no resource selected
        // ... allows creating a new resource of the current type
      }
      exploreView={
        // ... the left side panel which allows searching resources
      }
      contentView={
        // ... the center panel that renders content fo ra selected resource
      }
      controlView={
        // ...
      }
      isShowingControls
    />
)
```


### Redux Toolkit

## Redux

We use redux mainly to fetch data using the **src/**[`services`](#services).
Each slice consolidates the model, and respective controllers.

### Redux slice

The first file to cover is **src/store/slices/**`{domain}-slice.ts`

The slice persists the `model`, along side loading and error handling.

- Each endpoint is controlled with 3 fields, namely `data`, `loading` and `error`.
  - `data` stores the response model (item or list)
  - `loading` indicates whether the endpoints is loading
  - `error` stores the error message
- These ☝️ are encapsulated with generics: `AsyncReduxItem<T>` and `AsyncReduxList<T>`.
- The specific response model is passed through for the generic type `T`
- The response models of each endpoint, are stored in `src/entities`
- `entities` are TS interfaces that adhere to the endpoint response `json` schema

---

Example:
****
We will use the projects as an example.

`src/store/portfolio/portfolio-slice.ts`:

Shape of slice

```ts
interface IProjectSlice {
  list: AsyncData<IProject[]>
  item: AsyncData<IProject>,
  // ...
}
```

> Using the generic type `item: AsyncData<IProject>` results in
>
> ```ts
> item: {
>    data: IProject,
>    loading: boolean,
>    error: any
> }
> ```

Initial state

```ts
const initialState:IProjectSlice = {
  list: InitAsyncData<IProject[]>([]),
  item: InitAsyncData<IProject>({})
}
```

> Using the initialisation function `InitAsyncData<IProject>({})` results in
>
> ```ts
> item: {
>    data: {},
>    loading: false,
>    error: null
> }
> ```

---

The reducers all `set` an entry in the slice, so prefix them with `set`.

```ts
createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjectData: (state, action: PayloadAction<IProject>) => {
      state.item.data = action.payload
    },
    setProjectsLoading: (state, action: PayloadAction<boolean>) => {
      state.item.loading = action.payload
    },
    setProjectsError: (state, action: PayloadAction<any>) => {
      state.item.error = action.payload
    },
    // ...
  }
})
```

### Redux actions

The second file to cover is **src/features/**`{domain}-actions.ts`

This file contains all the actions which are `dispatch`ed in the views.
- The actions call the asynchronous [services](#services).
- The async state/response calls the corresponding reducers.

We simply append the word `Action` to the corresponding `service` function.

Examples:

- **dispatch(**`getProjectsAction(...)`**)**
- **dispatch(**`postProjectsAction(...)`**)**
- **dispatch(**`putProjectsSectionAction(...)`**)**

Examples:

```js
export function getProjectsAction() {
  return (dispatch: Dispatch) => {
    dispatch(setPortfolioVaultLoading(true));
    // GET /portfolio/vault
    return getPortfolioVault().then(
      response => {
        // SUCCESS
        dispatch(setPortfolioVaultData(response));
        dispatch(setPortfolioVaultLoading(false));
      },
      error => {
        // ERROR
        dispatch(setPortfolioVaultError(error));
        dispatch(setPortfolioVaultLoading(false));
        Bugsnag.notify(error);
      },
    );
  };
}
```