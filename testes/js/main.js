(function () {
  function myFunction () {
    return this
  }

  console.log(this)

  console.log(this === window)
})()
