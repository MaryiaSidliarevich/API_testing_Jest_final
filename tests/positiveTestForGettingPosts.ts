import superagent, {Response} from "superagent";
import * as expectedStatusCode from "../expectedValues/expectedStatusCodes";
import * as expectedStatusText from "../expectedValues/expectedStatusTexts";
import * as expectedValues from "../expectedValues/expectedValues";
import * as urls from "../requestValues/requestUrls";
import * as expectedObjects from "../expectedValues/expectedObjects";

describe('positive tests for getting list of post', (): void => {
    let testResponse: {[key: string]: any};

    beforeAll(async (): Promise<Response> => testResponse = await superagent.get(urls.baseURL));

    test('Assert status code is 200', (): void => {
        expect(testResponse.res.statusCode).toEqual(expectedStatusCode.statusCodeOk);
    });

    test ('Assert status text is OK', (): void => {
        expect(testResponse.res.statusMessage).toEqual(expectedStatusText.statusOk);
    });

    test('Assert response contains list of posts', (): void => {
        expect(testResponse.body).toBeDefined();
    });

    test('Assert list of posts contains at least one post', (): void => {
        expect(testResponse.body[0]).toBeDefined();
    });
});

describe('positive tests for getting first post', () => {
    let testResponse: {[key: string]: any};

    beforeAll(async (): Promise<Response>  => testResponse = await superagent.get(urls.firstPostURL));

    test('Assert status code is 200', (): void => {
        expect(testResponse.res.statusCode).toEqual(expectedStatusCode.statusCodeOk);
    });

    test ('Assert status text is OK', (): void => {
        expect(testResponse.res.statusMessage).toEqual(expectedStatusText.statusOk);
    });

    test('Assert response contains post', (): void => {
        expect(testResponse.body).toBeDefined();
    });

    test('Assert post in response contains field userId', (): void => {
        expect(testResponse.body.userId).toBeDefined();
    });

    test('Assert post in response contains field id', (): void => {
        expect(testResponse.body.id).toBeDefined();
    });

    test('Assert post in response contains field title', (): void => {
        expect(testResponse.body.title).toBeDefined();
    });

    test('Assert post in response contains field body', (): void => {
        expect(testResponse.body.body).toBeDefined();
    });

    test('Assert id for first post in response is 1', (): void => {
        expect(testResponse.body.id).toEqual(expectedValues.firstPostId);
    });

    test('Assert post in response is the same as expected', (): void => {
        expect(testResponse.body).toEqual(expectedObjects.firstPost);
    });
});
