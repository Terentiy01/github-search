import { useState } from 'react'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { IRepo } from '../models/models'

export function RepoCard({ repo }: { repo: IRepo }) {
  const { addFavourite, removeFavourite } = useActions()
  const { favourites } = useAppSelector((state) => state.github)

  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))

  const addToFavourite = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    addFavourite(repo.html_url)
    setIsFav(true)
  }

  const removeFromFavourite = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    removeFavourite(repo.html_url)
    setIsFav(false)
  }

  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Звёзды: <span className="font-bold">{repo.stargazers_count}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>
        {!isFav && (
          <button
            className="py-2 px-4 bg-green-500 mr-2 mt-1 rounded hover:shadow-md transition-all text-white"
            onClick={addToFavourite}
          >
            Сохранить
          </button>
        )}

        {isFav && (
          <button
            className="py-2 px-4 mt-1 bg-red-500 rounded hover:shadow-md transition-all text-white"
            onClick={removeFromFavourite}
          >
            Удалить
          </button>
        )}
      </a>
    </div>
  )
}
