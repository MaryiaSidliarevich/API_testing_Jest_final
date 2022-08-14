import superagent, {Response} from "superagent";
import {header} from "../requestValues/requestHeaders";
import {patchedPost} from "../requestValues/requestBodies";
import {firstPostURL} from "../requestValues/requestUrls";
import * as expectedStatusCode from "../expectedValues/expectedStatusCodes";
import * as expectedStatusText from "../expectedValues/expectedStatusTexts";
import * as expectedObjects from "../expectedValues/expectedObjects";

describe('positive tests for patching the first post', (): void => {
    let testResponse: {[key: string]: any};

    beforeAll(async (): Promise<Response> =>
        testResponse = await superagent.patch(firstPostURL)
            .set(header)
            .send(patchedPost));

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

    test('Assert field id is not updated and has value 1', (): void => {
        expect(testResponse.body.id).toEqual(expectedObjects.firstPost.id);
    });
});

