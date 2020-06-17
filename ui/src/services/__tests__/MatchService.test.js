import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import MatchService from "../MatchService";

describe('MatchService', () => {

    let mockedAxios;

    beforeEach(() => {
        mockedAxios = new MockAdapter(axios)
    });


    test('create_match', async () => {
        const payload = { payload: "some thing"}
        const response = { response: "other thing"}
        mockedAxios.onPost('/api/matchs', payload).reply(201, response);

        const data = await MatchService.startMatch(payload);
        expect(response).toEqual(data);
    });

    test('create_match_timeout_error', () => {
        const payload = { payload: "some thing" };
        const errorMsg = "Timeout Error";
        mockedAxios.onPost('/api/matchs', payload).timeout();

        return expect(MatchService.startMatch(payload)).rejects.toEqual(new Error(errorMsg));
    });

    test('create_match_connection_error', () => {
        const payload = { payload: "some thing" }
        const errorMessage = "Can not localize server";
        mockedAxios.onPost('/api/matchs', payload).networkError();

        return expect(MatchService.startMatch(payload)).rejects.toEqual(new Error(errorMessage));
    });

});