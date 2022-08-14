import superagent, {Response} from "superagent";
import {header} from "../requestValues/requestHeaders";
import {createdPost} from "../requestValues/requestBodies";
import {baseURL} from "../requestValues/requestUrls";
import * as expectedStatusCode from "../expectedValues/expectedStatusCodes";
import * as expectedStatusText from "../expectedValues/expectedStatusTexts";
import * as expectedObjects from "../expectedValues/expectedObjects";

describe('positive tests for adding new post', (): void => {
    let testResponse: {[key: string]: any};

    beforeAll(async (): Promise<Response> =>
        testResponse = await superagent.post(baseURL)
            .set(header)
            .send(createdPost));

    test('Assert status code is 201', (): void => {
        expect(testResponse.res.statusCode).toEqual(expectedStatusCode.statusCodeCreated);
    });

    test ('Assert status text is Created', (): void => {
        expect(testResponse.res.statusMessage).toEqual(expectedStatusText.statusCreated);
    });

    test('Assert response contains new post', (): void => {
        expect(testResponse.body).toBeDefined();
    });

    test('Assert new post in response contains field userId', (): void => {
        expect(testResponse.body.userId).toBeDefined();
    });

    test('Assert new post in response contains field id', (): void => {
        expect(testResponse.body.id).toBeDefined();
    });

    test('Assert new post in response contains field title', (): void => {
        expect(testResponse.body.title).toBeDefined();
    });

    test('Assert new post in response contains field body', (): void => {
        expect(testResponse.body.body).toBeDefined();
    });

    test('Assert new post in response is the same as in request', (): void => {
        expect(testResponse.body).toEqual(expectedObjects.newPost);
    });
});

