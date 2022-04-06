/* eslint-disable react-hooks/rules-of-hooks */
import { useHistory } from "react-router-dom";
import '../scss/recCategory.scss'

const recCategory = ({cate, clothes}) => {
  let history = useHistory()

  const goToDetail = (idx) => {
    history.push(`/item/${clothes[idx].newClothId}`)
  }

  const clickMore = () => {
    window.localStorage.setItem('clothes', JSON.stringify(clothes))
    history.push(`/recommend/${cate}`)
  }

<<<<<<< HEAD
  const comma = function(tar){
    let result = ''
    if (tar){
      for (let i = tar.length - 1; i >= 0; i--){
        if (i !== tar.length - 1 && (tar.length - i - 1) % 3 === 0){
          result = ',' + result
        }
        result = tar[i] + result
      }
    }
    return result
  }

=======
  console.log(clothes)
>>>>>>> 6127d93b931d63263e915d9786a2bdabbe8988db
  if (!clothes){
    return false
  }

  return (
    <div className='rec-category'>
      <div className='rec-cate-text'>
        <h3>{cate}</h3>
        <p onClick={() => clickMore()}>더보기</p>
      </div>
      <div className='rec-cate-cloth'>

      { clothes.slice(0, 5).map((cloth, idx) => (
        <div className='card' onClick={() => goToDetail(idx)} key={idx}>
          <div className='card-image'>
            <img src={cloth.clothImg} alt='cloth' />
          </div>
          <div className='card-text'>
            <p className="one-line">{cloth.brand}</p>
            <p className="two-line">{cloth.clothName}</p>
            <p className="one-line">Price: {comma(String(cloth.clothPrice))} 원</p>
            <p className="one-line">Size: {cloth.goodsSize}</p>
          </div>
        </div>
      ))}

      </div>
    </div>
  );
};

export default recCategory;