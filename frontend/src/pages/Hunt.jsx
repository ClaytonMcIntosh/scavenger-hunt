import HuntBox from "../components/HuntBox";
import data from "../components/data";

const Hunt = ({ huntName }) => {

    let categories = []

    for (let i = 0; i < data.length; i++) {
        categories.push(data[i].headerName)
    }

    let uniqueCategories = [...new Set(categories)]

    return (
        <div>
            <h1>Hunt</h1>
            {uniqueCategories.map((catName, index) => {
                return (
                    <HuntBox key={index} headerName={catName} data={data.filter((img) => img.headerName === catName)} />

                )
            })}
        </div>
    )
}


export default Hunt;