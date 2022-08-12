import dynamic from "next/dynamic"

const Test = dynamic(() => import(`/components/test`))

function Homepage() {
  return (
    <div>
      <Test />
    </div>
  )
}

export default Homepage
