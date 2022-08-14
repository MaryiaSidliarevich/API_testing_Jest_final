import superagent, {Response} from "superagent";
import {header} from "../requestHeaders/headers";
import {createdPost} from "../requestBodies/bodies";
import {firstPostURL} from "../requestUrls/urls";
import * as expectedStatusCode from "../expectedValues/expectedStatusCodes";
import * as expectedStatusText from "../expectedValues/expectedStatusTexts";

describe('positive tests for updating the first post', (): void => {
    let testResponse: {[key: string]: any};

    beforeAll(async (): Promise<Response> =>
        testResponse = await superagent.put(firstPostURL)
            .set(header)
            .send(createdPost));

    test('Assert status code is 200', (): void => {
        expect(testResponse.res.statusCode).toEqual(expectedStatusCode.statusCodeOk);
    });

    test ('Assert status text is OK', (): void => {
        expect(testResponse.res.statusMessage).toEqual(expectedStatusText.statusOk);
    });

    test('Assert response contains updated post', (): void => {
        expect(testResponse.body).toBeDefined();
    });

    test('Assert updated post in response contains field userId', (): void => {
        expect(testResponse.body.userId).toBeDefined();
    });

    test('Assert updated post in response contains field id', (): void => {
        expect(testResponse.body.id).toBeDefined();
    });

    test('Assert updated post in response contains field title', (): void => {
        expect(testResponse.body.title).toBeDefined();
    });

    test('Assert updated post in response contains field body', (): void => {
        expect(testResponse.body.body).toBeDefined();
    });
});

