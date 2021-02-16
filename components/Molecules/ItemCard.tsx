import AddCartButton from "../Atoms/Button/AddCartButton"

type Props = {
  backgroundImageUrl: string,
  ItemName: string,
  ItemPrice: string,
}

const ItemCard = ({ backgroundImageUrl, ItemName, ItemPrice }: Props) => (
  <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
    <div className="prod-img">
      <img src={backgroundImageUrl}
        className="object-cover object-center h-56 w-full bg-cover" />
    </div>
    <div className="flex items-end justify-between px-5 py-3">
      <div>
        <h3 className="text-gray-700 uppercase">{ItemName}</h3>
        <span className="text-gray-500 mt-2">{ItemPrice}</span>
      </div>
      <AddCartButton />
    </div>
  </div>
)

export default ItemCard