import AppHeader from './AppHeader';
import Logo from "../../assets/images/logo.png";

describe('<AppHeader />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AppHeader />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('Snapshot testing', () => {
        const wrapper = shallow(<AppHeader />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Component should have logo', () => {
        const wrapper = shallow(<AppHeader />);
        expect(wrapper.find("img").prop("src")).toEqual(Logo);
    });
});