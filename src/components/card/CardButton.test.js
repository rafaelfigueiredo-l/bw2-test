import CardButton from './CardButton';
const func = () => {
    return true;
};

describe('<CardButton />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<CardButton getRandomPlanet={func} />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('Snapshot testing', () => {
      const wrapper = shallow(<CardButton getRandomPlanet={func}  />);
      expect(wrapper).toMatchSnapshot();
    });
});