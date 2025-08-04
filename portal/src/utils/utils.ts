export const isServer = () => typeof window === "undefined";

export const getFetcher = <T>(url: string): Promise<T> => fetch(url).then((res) => res.json());

export async function postFetcher<Body>(url: string, { arg }: { arg: Omit<Body, "id"> }) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg)
  }).then((res) => res.json() as Body);
}
