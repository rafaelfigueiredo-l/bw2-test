import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Snapshot testing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Component should have this default values', () => {
    const wrapper = shallow(<App />);
    let defaultValues = {
      status: null,
      type: null,
      message: null,
      component: null,
    };
    expect(wrapper.state('alertError')).toEqual(defaultValues);
  });

  it('alertError.status should be true', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    instance.setAlert('Some Type', 'Some Message', 'Some Component');
    expect(instance.state.alertError).toEqual({
      status: true,
      type: 'Some Type',
      message: 'Some Message',
      component: 'Some Component',
    });
  });

  it('Should find AppAlert', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('AppAlert')).toHaveLength(1);
  });

  it('Should find AppHeader', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('AppHeader')).toHaveLength(1);
  });

  it('Should find Card', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('Card')).toHaveLength(1);
  });

});