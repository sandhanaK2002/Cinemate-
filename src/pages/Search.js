import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import {useTitle} from "../hooks/useTitle"


export const Search = ({apiPath}) => {

  
  const [searchParams] = useSearchParams()
  const queryTerms = searchParams.get('q')
  const { data: movies } = useFetch(apiPath , queryTerms);
  
  useTitle(`Search result for ${queryTerms}`)



  return (
    <main>
      <section className = "py-7  ">
      <p className="text-3xl text-gray-700 dark:text-white">{movies.length > 0 ? `search results for "${queryTerms}"` : `No results found for ${queryTerms}`} </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">       
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}