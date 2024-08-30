export const getRestVerbColor = (method: string): string => {
  switch (method.toUpperCase()) {
  case 'GET':
    return '#2ecc71'; // Green color for GET
  case 'POST':
    return '#3498db'; // Blue color for POST
  case 'PUT':
    return '#f39c12'; // Orange color for DELETE
  case 'DELETE':
    return '#e74c3c'; // Red color for PUT
  default:
    return '#95a5a6'; // Default color
  }
};

export const getStatusColor = (status: number) => {
  if (status >= 200 && status < 300) {
    return '#2ecc71'; // 2xx Success
  } else if (status >= 300 && status < 400) {
    return '#3498db'; // 3xx Redirection
  } else if (status >= 400 && status < 500) {
    return '#e74c3c'; // 4xx Client Error
  } else if (status >= 500) {
    return '#e67e22'; // 5xx Server Error
  } else {
    return '#95a5a6'; // Default color
  }
};

export const getStatusDescription = (statusCode: number): string => {
  if (statusCode >= 100 && statusCode < 200) {
    return 'Informational';
  } else if (statusCode >= 200 && statusCode < 300) {
    switch (statusCode) {
    case 200:
      return 'OK';
    case 201:
      return 'Created';
    case 204:
      return 'No Content';
      // Add more specific 2xx status codes as needed
    default:
      return 'Success';
    }
  } else if (statusCode >= 300 && statusCode < 400) {
    return 'Redirection';
  } else if (statusCode >= 400 && statusCode < 500) {
    switch (statusCode) {
    case 400:
      return 'Bad Request';
    case 401:
      return 'Unauthorized';
    case 403:
      return 'Forbidden';
    case 404:
      return 'Not Found';
    case 429:
      return 'Too Many Requests';
      // Add more specific 4xx status codes as needed
    default:
      return 'Client Error';
    }
  } else if (statusCode >= 500) {
    switch (statusCode) {
    case 500:
      return 'Internal Server Error';
    case 502:
      return 'Bad Gateway';
    case 504:
      return 'Gateway Timeout';
      // Add more specific 5xx status codes as needed
    default:
      return 'Server Error';
    }
  } else {
    return 'Unknown';
  }
};

export default getStatusDescription;


