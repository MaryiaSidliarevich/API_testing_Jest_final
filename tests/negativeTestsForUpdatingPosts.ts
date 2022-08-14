import superagent from "superagent";
import {header} from "../requestHeaders/headers";
import {createdPost} from "../requestBodies/bodies";
import {unexcitingPostURL} from "../requestUrls/urls";
import * as expectedStatusCode from "../expectedValues/expectedStatusCodes";
import * as expectedStatusText from "../expectedValues/expectedStatusTexts";
import {Resp} from "../interfaces/interfaces";

describe('negative tests for updating unexciting post', (): void => {
    let testResponse: Resp;

    beforeAll(async (): Promise<void> => {
        try {
            testResponse = await superagent.put(unexcitingPostURL)
                .set(header)
                .send(createdPost);
        } catch (err) {
            if (err instanceof Error) {
                testResponse = err;
            }
        }
    });

    test('Assert status code is 500', (): void => {
        expect(testResponse.response.res.statusCode).toEqual(expectedStatusCode.statusCodeInternalServerError);
    });

    test('Assert status text is Internal Server Error', (): void => {
        expect(testResponse.response.res.statusMessage).toEqual(expectedStatusText.statusInternalServerError);
    });

    test('Assert status message is TypeError: Cannot read properties of undefined (reading id)', (): void => {
        expect(testResponse.response.res.text).toContain("TypeError: Cannot read properties of undefined (reading 'id')");
    });
});

