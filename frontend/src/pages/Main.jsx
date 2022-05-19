import HuntBox from "../components/HuntBox";
import data from "../components/data";



const Main = () => {



    let categories = []

    for (let i = 0; i < data.length; i++) {
        categories.push(data[i].headerName)
    }

    let uniqueCategories = [...new Set(categories)]

    return (
        <div>
            {uniqueCategories.map((catName, index) => {
                return (
                    <HuntBox key={index} headerName={catName} data={data.filter((img) => img.headerName === catName)} />

                )
            })}
        </div>
    )
}


export default Main;