export const hello = (who: string) => console.log(`Hello ${who}!`);


hello("olaaa 123") // vai dar bom
hello((123 as unknown) as string) // vai dar erro