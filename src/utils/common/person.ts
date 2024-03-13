export type User = {
  backgroundImageUrl: string;
  profilePictureUrl: string;
  name: string;
  title: string;
  followers: number;
  following: number;
};

export enum Person {
  PersonA = "PersonA",
  PersonB = "PersonB",
  PersonC = "PersonC",
}

export const fetchPerson = (
  signal: AbortSignal | undefined,
  personId: Person | null,
): Promise<User> => {
  if (!personId) {
    throw new Error("Something went wrong!");
  }

  return fetch(`api/person?person=${personId}`, { signal })
    .then((response) => response.json())
    .catch(() => {
      throw new Error("Something went wrong!");
    });
};
