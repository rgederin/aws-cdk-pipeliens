import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';

export async function main(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
    return {
        body: JSON.stringify({ message: 'Hello from lambda' }),
        statusCode: 200,
    };
}