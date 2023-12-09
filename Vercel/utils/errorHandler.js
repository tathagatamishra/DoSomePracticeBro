
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    // Send a standardized error response to the client
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Something went wrong on the server.',
    });
  };
  
  module.exports = errorHandler;
  