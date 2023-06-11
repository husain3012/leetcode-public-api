import { ILeetCodeUser } from '..';
export * from './fetchAccount';
export * from './parse';

export type IGetLCAccount = (username: string) => Promise<{
  status: number;
  statusText: string;
  data: ILeetCodeUser | null;
}>;
