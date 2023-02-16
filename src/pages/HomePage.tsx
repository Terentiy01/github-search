import { useSearchUsersQuery } from '../store/github/github.api'

function HomePage() {
  const { isLoading, isError, data } = useSearchUsersQuery('terentiy')
  console.log(data)

  return <div>HomePage</div>
}

export default HomePage
