export const keyEnv = process.env.NEXT_PUBLIC_API_KEY;
export const baseApiEnv = process.env.NEXT_PUBLIC_BASE_API;

export const URL = `${baseApiEnv}everything?apiKey=${keyEnv}&`;
