import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks'

describe("Pruebas en el hook useFetchGifs", () => {
    test("Debe retornar el estado inicial",async() => {
        const {result,waitForNextUpdate} = renderHook( ()=>  useFetchGifs('HunterX'));
        const {data,loading} = result.current;
        await waitForNextUpdate({timeout:2000});
        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    });

    test('Debe de retornar un arreglo de imagenes y el loading en false',async() => {

        const {result, waitForNextUpdate} = renderHook( ()=>  useFetchGifs('HunterX'));
        await waitForNextUpdate({timeout:2000});
        const {data,loading} = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBeFalsy();

    })
    
});
