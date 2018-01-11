module.exports = {
  formatBody: (body, token, method) => ({
    method: method,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(Object.assign({}, body, {token}))
  })
}
