import { createExpressApp } from '../server';

let appInstance: any = null;

export default async function handler(req: any, res: any) {
  if (!appInstance) {
    appInstance = await createExpressApp();
  }
  return appInstance(req, res);
}
