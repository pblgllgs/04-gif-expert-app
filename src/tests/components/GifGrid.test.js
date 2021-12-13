import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
//finje la llamada a ese fetch
jest.mock("../../hooks/useFetchGifs");

describe("Prueba en <GifGrid />", () => {
    const category = "HunterX";

    test("Debe mostrar <GifGrid /> correctamente", () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
    });

    test("debe de mostrar items cuando se cargan imagenes con el useFetchGifs", () => {
        const gifs = [
            {
                id: "abc",
                title: "titulo1",
                url: "http://foto.imagen/photo1.jpg",
            },
            {
                id: "123",
                title: "titulo2",
                url: "http://foto.imagen/photo2.jpg",
            }
        ];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const wrapper = shallow(<GifGrid category={category} />);
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });


});
