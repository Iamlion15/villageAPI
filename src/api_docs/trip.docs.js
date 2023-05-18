/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
const createTrip = {
  tags: ['visitor'],
  summary: 'Add new visitor',
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            from: {
              type: 'string',
              description: 'Departure place',
              example: 'Kigali',
            },
            to: {
              type: 'string',
              description: 'Destination',
              example: 'Huye',
            },
            travelTime: {
              type: 'string',
              description: 'After every which minutes bus is avaialable',
              example: '20',
            },
            price: {
              type: 'number',
              description: 'Price per one seat on the ticket',
              example: 2600,
            },
          },
        }
      }
    }
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    201: {
      description: 'visitor has been successfully added',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'number',
                example: 201,
              },
              data: {
                type: "object",
                example: [],
              },
            },
            required: ['status', 'data'],
          },
        },
      },
    },
    400: {
      $ref: "#/components/responses/BadRequest"
    },
    401: {
      $ref: "#/components/responses/Unauthorized"
    },
    409: {
      $ref: "#/components/responses/AlreadyExists"
    },
    422: {
      $ref: "#/components/responses/UnprocessableContent"
    },
    500: {
      $ref: "#/components/responses/ServerError"
    },
  },
};
const getTripsByAgency = {
  tags: ['visitor'],
  parameters: [
    {
      name: "visitor",
      in: "path",
      description: "visitor Name",
      type: "string",
      example: "mugisha"
    }
  ],
  description: 'List all visitors by an gency',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'number',
                description: 'Status code of the request',
                example: 200,
              },
              message: {
                type: 'string',
                description: 'list of all trips by Volcano',
                example: 'Trips Found Successfull',
              },
              data: {
                type: "object",
                example: {},
              },
            }
          }
        }
      }
    },
    404: {
      $ref: "#components/responses/NotFound"
    },
    500: {
      $ref: "#/components/responses/ServerError"
    },
  }
};

export const tripRouteDocs = {
  '/api/citizen/create': {
    post: createTrip,
  },
  '/api/citizen/all/{citizen}': {
    get: getTripsByAgency,
  },
};
