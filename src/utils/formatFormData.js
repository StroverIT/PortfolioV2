export  function format(refs) {
  console.log(refs);
    const data = {}
    for (let ref in refs) {
      const {name, value} = refs[ref].current.data()

      data[name] = value
    }
  
    return data
  }