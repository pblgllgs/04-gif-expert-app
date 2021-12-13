import React from "react";
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach( ()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test("Debe mostrar <AddCategory /> correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar el input', () => {
        const input =wrapper.find('input');
        const value = 'Hola';
        // simulamos que el target trae dentro un elemento con el value, sino da error
        input.simulate('change',{target : {value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola';
        //busca el input
        const input =wrapper.find('input');
        //simula el cambio en el input, pasando metodo y el valor
        input.simulate('change',{target : {value}});
        // simula el envio del formulario, junto con el metodo
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        //verifico que se ejecute 1 vez.
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function));
        //obtengo una referencia a las propiedades del input
        const props = wrapper.find("input").props();
        // verifico que el valor del inputValue se haya reseteado
        expect(props.value).toBe('');
    });
})
