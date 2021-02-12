import AddCartButton from "../Atoms/Button/AddCartButton"

type Props = {
  backgroundImageUrl: string,
  ItemName: string,
  ItemPrice: string,
}

const ItemCard = ({ backgroundImageUrl, ItemName, ItemPrice }: Props) => (
  <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
    <div className="flex items-end justify-end h-56 w-full bg-cover" style={{
      backgroundImage: `url(${backgroundImageUrl})`
    }}>
      <AddCartButton />
    </div>
    <div className="px-5 py-3">
      <h3 className="text-gray-700 uppercase">{ItemName}</h3>
      <span className="text-gray-500 mt-2">{ItemPrice}</span>
    </div>
  </div>
)

export default ItemCard