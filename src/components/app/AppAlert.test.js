import AppAlert from './AppAlert';

describe('<AppAlert />', () => {
    it('renders without crashing', () => {
        let obj = {
            status: true,
            type: 'Some Type',
            message: 'Some Message',
            component: 'Some Component',
        };

        const div = document.createElement('div');
        ReactDOM.render(<AppAlert alertError={obj} />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('Snapshot testing', () => {
        let obj = {
            status: true,
            type: 'Some Type',
            message: 'Some Message',
            component: 'Some Component',
        };
        const wrapper = shallow(<AppAlert alertError={obj} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Snapshot false || null ? should return null', () => {
            let obj = {
                status: false,
                type: 'Some Type',
                message: 'Some Message',
                component: 'Some Component',
            };
            const wrapper = shallow(<AppAlert alertError={obj} />);
            expect(wrapper).toMatchSnapshot();
    });
});