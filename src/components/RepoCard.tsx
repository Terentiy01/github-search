import { useActions } from '../hooks/actions'
import { IRepo } from '../models/models'

export function RepoCard({ repo }: { repo: IRepo }) {
  const { addFavourite } = useActions()

  const addToFavourite = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    addFavourite(repo.html_url)
  }

  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Звёзды: <span className="font-bold">{repo.stargazers_count}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>
        <button
          className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all"
          onClick={addToFavourite}
        >
          Добавить
        </button>
      </a>
    </div>
  )
}
