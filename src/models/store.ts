export type AsyncData<T> = {
  loading: boolean;
  error: any;
  data: T | null;
};

/**
 * Initialises a portion of a redux slice that has been declared with `AsyncReduxNode<T>`
 *
 * > - `T` is your arbitrary type, and `data: T` is the parameter for the initial state of that property of your slice
 * > - e.g. for an `Array` type it could be `[]`, for an `Object` it'd be  `{}` etc.
 * > - you can also initialise with `null`
 */
export const InitAsyncData = <T>(data: T): {
  loading: boolean,
  error: any,
  data: T
} => ({
    data,
    error: null,
    loading: true,
  });

export interface AsyncDataHook<T> {
  /** the list of T*/
  list: AsyncData<T[]>,
  /** a single item of T*/
  item: AsyncData<T | null>,
  /** the action to create the resource T*/
  create: (args: { projectId?: string, customId?: string, data: T, onSuccess?: (res: any) => void, onError?: (error: any) => void }) => void,
  /** the action to read the resource T*/
  read: (() => void) | ((args: { projectId: string, id?: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }) => void),
  /** the action to update the resource T*/
  update: (args: { projectId?: string, id: string, data: T, onSuccess?: (res: any) => void, onError?: (error: any) => void }) => void,
  /** the action to delete the resource T*/
  delete: (args: { projectId?: string, id: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }) => void,
  /** clears the `slice.item` in the store */
  clearItem?: () => void,
  /** clears the `slice.list` in the store */
  clearList?: () => void,

  setItem?: <T>(item: T) => void,
  /** returns a list of `galleryId` based on the `list` of `T` */
  galleryIds?: () => (string | undefined)[]
}

export type SliceType =
  'users' |
  'tenants' |
  'workspaces' |
  'projects' |
  'dashboard' | // currently not used in DB persistence... we use projects for that

  // management
  'documents' |
  'dialogues' |
  'graphs' |
  'controls' |
  'illustrations' |
  'segments' |

  // creative
  'characters' |
  'creatures' |
  'objects' |
  'locations' |
  'transports' |

  // AI
  'ai' |
  'images' |
  'videos' |
  'sounds' |
  'chats' |
  '3d' |
  'settings'

export const SLICES: { [key in SliceType]: SliceType } = {
  '3d': '3d',
  ai: 'ai',
  characters: 'characters',
  chats: 'chats',
  controls: 'controls',
  creatures: 'creatures',
  dashboard: 'dashboard',
  dialogues: 'dialogues',
  documents: 'documents',
  graphs: 'graphs',
  illustrations: 'illustrations',
  images: 'images',
  locations: 'locations',
  objects: 'objects',
  projects: 'projects',
  segments: 'segments',
  settings: 'settings',
  sounds: 'sounds',
  tenants: 'tenants',
  transports: 'transports',
  users: 'users',
  videos: 'videos',
  workspaces: 'workspaces',
};


