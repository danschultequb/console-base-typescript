import * as assert from "assert"
import { getMessage } from "../sources/index"

suite("index.ts", () =>
{
    suite("getMessage(string)", () =>
    {
        test(`with no argument`, () =>
        {
            assert.strictEqual("Hello there, world!", getMessage());
        });

        function getMessageTest(target: string | undefined, expected: string): void
        {
            test(`with "${target}"`, () =>
            {
                assert.strictEqual(expected, getMessage(target));
            });
        }

        getMessageTest(undefined, "Hello there, world!");
        getMessageTest("", "Hello there, !");
        getMessageTest("abc", "Hello there, abc!");
    });
});