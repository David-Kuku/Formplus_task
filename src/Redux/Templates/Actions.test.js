import { FETCH_TEMPLATE_REQUEST, FETCH_TEMPLATE_SUCCESS } from './Types';
import { fetchtemplaterequest, fetchtemplatesuccess, fetchtemplates } from './Actions';
import "@testing-library/jest-dom/extend-expect";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();


//action creator test, pretty much the same for all actions
test("It should create an action to send a fetch template request", () => {
    const expected_fetchrequest = {
        type: FETCH_TEMPLATE_REQUEST
    }

    expect(fetchtemplaterequest()).toEqual(expected_fetchrequest)
})

test("It should create an action to send a fetch template Success", () => {
    const payloads = "payload"
    const expected_fetchrequest = {
        type: FETCH_TEMPLATE_SUCCESS,
        payload: payloads
    }

    expect(fetchtemplatesuccess(payloads)).toEqual(expected_fetchrequest)
})



//async testing
describe('Asynchronous fetching actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    test('dispatches FETCH_TEMPLATE_SUCCESS after a successfull API requets', () => {
        mock.onGet('https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates')
            .reply(200, { response: [{ item: 'item1' }, { item: 'item2' }] })

        let expectedActions = [
            { type: 'FETCH_TEMPLATE_REQUEST' },
            {
                type: 'FETCH_TEMPLATE_SUCCESS',
                payload: [{ item: 'item1' }, { item: 'item2' }]
            }
        ]
        store.dispatch(fetchtemplates()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
});
