import { drizzle } from '@xata.io/drizzle';
import { getXataClient } from '../../xata';

const xata = getXataClient();

export const db = drizzle(xata);
