import { HTTPClient } from 'boot/axios'
// import { SET_POSTS } from './mutations'

const setPosts = ({ commit }) => {
  return new Promise((resolve, reject) => {
    HTTPClient.get('v2/posts')
      .then((suc) => {
        commit('SET_POSTS', suc.data)
        console.log(suc.data)
        resolve(suc.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export {
  setPosts
}
