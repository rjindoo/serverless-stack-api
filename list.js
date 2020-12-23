import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const params = {
        TableName: process.env.tableName,
        // 'KeyConditionExpression' condition for query
        // 'userId = :userId': only return items with matching userId
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": "123",
        },
    };

    const result = await dynamoDb.query(params);

    // Return the matching list of items in response body
    return result.Items;
});