import Card from './Card';

const func = () => {
    return true;
};

describe('<Card />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card setAlert={func} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Snapshot testing', () => {
    const wrapper = shallow(<Card setAlert={func} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render null if state.error is true', () => {
    const wrapper = shallow(<Card setAlert={func} />);
    wrapper.setState({ error: true });
    expect(wrapper).toEqual({});
  });

  it('should render Loader if state.cardData is null', () => {
    const wrapper = shallow(<Card setAlert={func} />);
    wrapper.setState({cardData: null});
    expect(wrapper.find('Loader')).toHaveLength(1);
  });

  it('should render h2 if state.cardData is not null', () => {
    const wrapper = shallow(<Card setAlert={func} />);
    wrapper.setState({cardData: {
      name: "Kalee",
      population: "4000000000",
      climate: "arid, temperate, tropical",
      terrain: "rainforests, cliffs, canyons, seas",
      films: [],
    }});
    expect(wrapper.find('h2')).toHaveLength(1);
  });

});