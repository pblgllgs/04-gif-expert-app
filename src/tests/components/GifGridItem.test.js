import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('Pruebas de GifGridItem', () => {

    const title = 'Titulo';
    const url = 'http://localhost:3000/uploads/foto.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test("Debe mostrar <GifGridItem /> correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un parrafo con el title', () => {
        const parrafo = wrapper.find("p").text();
        expect(parrafo.trim()).toBe(title);
    });

    test('Debe de tener un img con src y alt', () => {
        const imagen = wrapper.find("img").props();
        expect(imagen.src).toBe(url);
        expect(imagen.alt).toBe(title);
    });

    test('Debe de tener un div con clasename animate__fadeIn', () => {
        const div = wrapper.find("div").props();
        expect(div.className).toContain('animate__fadeIn');
    });

    test('Debe de tener un div con clasename animate__fadeIn 2', () => {
        const div = wrapper.find("div").props();
        const className = div.className;
        const arr = className.split(' ');
        expect(arr).toContain('animate__fadeIn')
    });
});
