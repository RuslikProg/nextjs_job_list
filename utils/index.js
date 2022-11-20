export const convertData = (data, arg) => data?.split(arg).map(x=>x.trim()).filter(Boolean);
export const starsGerenerator = (count) => Array.from(Array(count).fill(null));
export const dateMaker = ( data ) => Object.keys(data).length ? data?.updatedAt.substring(0,10).replace(/-/g,'/') : {};