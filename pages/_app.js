const direction = "rtl"

function App(props) {
  const { Component } = props

  return <Component />
}

App.getInitialProps = async (ctx) => {
  const { req, res } = ctx

  // when url is invalid
  if (req.url === "xxx...") {
    return res.status(404).end()
  }

  // some code ...

  return {}
}

export default App
