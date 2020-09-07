import { useFetchGifs } from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks';
import  '@testing-library/jest-dom';


describe('Pruebas en el hook useFetchGifs', () => {
    
    test('debe de retornar el estado inicial', async() => {
        
        // const {data, loading} = useFetchGifs('The Beatles') ;
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('The Beatles') );
        const {data, loading} = result.current;
        
        await waitForNextUpdate();


        expect(data).toEqual([]);
        expect(loading).toBe(true); 


    });

    test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('The Beatles') );
        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false); 

    })
    
    

})
