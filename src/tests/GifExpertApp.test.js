import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Pruebas en el GifExpertApp", () => {
    const wrapper = shallow(<GifExpertApp />);
    test("Debe mostrarse correctamente <GifExpertApp />", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['one punch','gragon ball']
        const wrapper = shallow(<GifExpertApp defaulCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
});
