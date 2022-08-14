import superagent, {Response} from "superagent";
import * as expectedStatusCode from "../expectedValues/expectedStatusCodes";
import * as expectedStatusText from "../expectedValues/expectedStatusTexts";
import {firstPostURL} from "../requestValues/requestUrls";

describe('positive tests for deleting the first post', (): void => {
    let testResponse: {[key: string]: any};

    beforeAll(async (): Promise<Response> => testResponse = await superagent.delete(firstPostURL));

    test('Assert status code is 200', (): void => {
        expect(testResponse.res.statusCode).toEqual(expectedStatusCode.statusCodeOk);
    });

    test ('Assert status text is OK', (): void => {
        expect(testResponse.res.statusMessage).toEqual(expectedStatusText.statusOk);
    });

    test('Assert empty object in response', (): void => {
        expect(testResponse.body).toEqual({});
    });
});

