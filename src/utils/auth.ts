export interface IAuthProvider {
    id: string;
    name: string;
    color: string;
}

// TODO: deprecate, as it is not being used anymore
export const authProviders: IAuthProvider[] = [
  {
    color: '#F00',
    id: 'Google',
    name: 'Google',
  },
  {
    color: '#222',
    id: 'Apple',
    name: 'Apple',
  },
  {
    color: '#25C',
    id: 'Facebook',
    name: 'Facebook',
  },
  {
    color: '#000',
    id: 'Github',
    name: 'Github',
  }
];