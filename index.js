import { GiphyFetch } from '@giphy/js-fetch-api'
import { renderGrid } from '@giphy/js-components'

function shuffle(array) {
    let currentId = array.length;
    while (0 !== currentId) {
        let randomId = Math.floor(Math.random() * currentId);
        currentId -= 1;
        let tmp = array[currentId];
        array[currentId] = array[randomId];
        array[randomId] = tmp;
    }
    return array;
}
  
const gf = new GiphyFetch(process.env.GIPHY_API_KEY)
const terms = ['lgtm', 'approved', 'celebrate', 'thumbsup', 'yup', 'yep', 'yes', 'yay']
const randomTerm = shuffle(terms)[0]
const fetchGifs = (offset) => gf.search(randomTerm, { limit: 27 })
const getWidth = () => window.innerWidth

window.onload = () => {
    const main = document.getElementById('main')
    const width = getWidth() - 30
    const render = () => renderGrid({
        width,
        fetchGifs,
        columns: width < 500 ? 2 : 3,
        gutter: 6,
    }, main)
    window.addEventListener('resize', render, false)
    render()
}
