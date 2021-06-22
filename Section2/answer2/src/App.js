import React, { useEffect, useState } from 'react'

const App = () => {
  const [categories, setCategories] = useState([])
  const [defaultData, setDefault] = useState([])

  useEffect(() => {
    const setUp = async () => {
      const dataJson = await fetch('https://api.publicapis.org/categories')
      const data = await dataJson.json()
      setCategories(data)
      setDefault(data)
    }
    setUp()
  }, [])

  const filterCategories = e => {
    const filterData = defaultData.filter(item => item.toLowerCase().includes(e))
    if (filterData.length > 0) {
      setCategories(filterData)
    }

    if(e === '') {
      setCategories(defaultData)
    }
  }

  return (
    <div>
      <div>
        <input onChange={e => filterCategories(e.target.value)}/>
      </div>
      <div>
        <table>
          <tr>
            <th>No.</th>
            <th>Categories</th> 
          </tr>
          {categories.map((item, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{item}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
