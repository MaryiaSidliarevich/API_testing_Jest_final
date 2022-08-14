import superagent from "superagent";
import {unexcitingPostURL} from "../requestUrls/urls";
import * as expectedStatusCode from "../expectedValues/expectedStatusCodes";
import * as expectedStatusText from "../expectedValues/expectedStatusTexts";
import {Resp} from "../interfaces/interfaces";

describe('negative tests for getting unexciting post', (): void => {
    let testResponse: Resp;

    beforeAll(async (): Promise<void> => {
        try {
            testResponse = await superagent.get(unexcitingPostURL);
        } catch (err) {
            if (err instanceof Error) {
                testResponse = err;
            }
        }
    });

    test('Assert status code is 404', (): void => {
        expect(testResponse.response.res.statusCode).toEqual(expectedStatusCode.statusCodeNotFound);
    });

    test('Assert status text is Not Found', (): void => {
        expect(testResponse.response.res.statusMessage).toEqual(expectedStatusText.statusNotFound);
    });

    test('Assert empty object in response', (): void => {
        expect(testResponse.response.body).toEqual({});
    });
});
