import getGifs from "../../helpers/getGifs"

describe('Pruebas en getGifs fetchAPI', () => {
    test('Debe de traer 10 elementos', async () => {
        const  elementos = await getGifs('Goku');
        expect(elementos.length).toBe(10);
    })

    test('Debe de enviarse una category', async () => {
        const  elementos = await getGifs('');
        console.log(elementos)
        expect(elementos).toEqual([]);
    })
    
})