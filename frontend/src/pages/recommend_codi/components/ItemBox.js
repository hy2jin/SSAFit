/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { DA_URL } from '../../../Request'
import React from 'react'
import Loading from '../../../components/Loading'
import { useHistory } from 'react-router-dom'

export default function itembox({ items }) {
  if (items.length === 0){
    return <Loading/>
  }

  let history = useHistory()

  const comma = function(tar){
    let result = ''
    for (let i = tar.length - 1; i >= 0; i--){
      // console.log('result!!!!', result)
      if (i !== tar.length - 1 && (tar.length - i - 1) % 3 === 0){
        result = ',' + result
      }
      result = tar[i] + result
    }

    return result
  }

  const getNewClothId = async (clothId) => {
    const userId = JSON.parse(window.sessionStorage.getItem('userInfo')).id
    
    await axios({
      method: 'get',
      url: `${DA_URL}/cloth/isSSAFIT/${clothId}?userId=${userId}`
    })
    .then(res => {
      if (res.data) {
        history.push(`/item/${res.data}`)
      } else {
        console.log('무신사로 go!')
      }
    })
    .catch(err => console.log(err, typeof(err)))
  }

  const cards = items.map(item => {
    return (
    <div className='item-card' key={item[0]} onClick={() => getNewClothId(item[0])}>
      <img className='item-img' src={item[3]} alt={item[2]} />
      <div className='item-content'>
        <p>{item[1]}</p>
        <p>{item[2]}</p>
        <p>{comma(item[4]) + '원'}</p>
      </div>
    </div>
    )}
  )

  return (
    <div className='item-box'>
      {cards}
    </div>
  )
}
