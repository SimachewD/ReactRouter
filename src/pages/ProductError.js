import { useRouteError } from "react-router-dom"

export default function ProductError() {
    const error = useRouteError();
  return (
    <div className="text-red-700 font-bold bg-sky-500 h-2/3 text-3xl py-52 rounded-md shadow-md mx-10 text-center">
      {error.message}
    </div>
  )
}
