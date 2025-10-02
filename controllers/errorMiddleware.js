function errorMiddleware(err, req, res, next) {
  res.status(err.statusCode || 500);
  res.render('layout', { page: 'error', error: err });
}

module.exports = errorMiddleware;