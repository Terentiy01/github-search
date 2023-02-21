import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className="flex justify-between items-center h-[50px] px-5 shadow-md bg-[#1a2d47f8] text-white">
      <h3 className="font-bold">Github Поиск</h3>
      <span>
        <Link to="/" className="mr-2">
          Главная
        </Link>
        <Link to="/favourites">Избранное</Link>
      </span>
    </div>
  )
}

export default Navigation
