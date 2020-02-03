import CardLoader from './CardLoader';

describe('<CardLoader />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<CardLoader />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('Snapshot testing', () => {
      const wrapper = shallow(<CardLoader />);
      expect(wrapper).toMatchSnapshot();
    });
});