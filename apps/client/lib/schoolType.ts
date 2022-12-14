
interface ValueMap {
  readonly [slug: string]: string;
}

export const getSchoolTypes = async () => {
  const result = await fetch(`${process.env.SERVER_URL}/v1/ofsted/schoolTypes`)
  const data = await result.json();
  return data as ValueMap;
};

export const getSchoolTypeById = async (type: string) => {
  const schoolTypes = await getSchoolTypes();
  return schoolTypes[type];
}