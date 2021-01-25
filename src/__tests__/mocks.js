const mockRequest = () => ({
  body: {},
  headers: {},
});
const mockResponse = () => ({
  query: {},
  headers: {},
  params: {},
  data: null,
  status: jest.fn().mockReturnThis(),
  send: jest.fn().mockReturnThis(),
  json: jest.fn().mockReturnThis(),
});
const mockNext = jest.fn();

module.exports = { mockRequest, mockResponse, mockNext };
