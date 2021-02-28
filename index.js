import { GiphyFetch } from '@giphy/js-fetch-api'
import { renderGrid } from '@giphy/js-components'

const gf = new GiphyFetch(process.env.GIPHY_API_KEY)
const fetchGifs = (offset) => gf.search('lgtm, approved, celebrate, thumbsup')
const getWidth = () => window.innerWidth;

window.onload = () => {
    const main = document.getElementById('main')
    const width = getWidth();
    renderGrid({
        width,
        fetchGifs,
        columns: width < 500 ? 2 : 4,
        gutter: 6,
      },
      main
    )
}
