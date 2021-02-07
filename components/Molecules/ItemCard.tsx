import AddCart from "../Atoms/Button/AddCart"

type Props = {
  backgroundImageUrl: string,
  ItemName: string,
  ItemPrice: string,
}

//'https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80'

const ItemCard = ({ backgroundImageUrl, ItemName, ItemPrice }: Props) => (
  <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
    <div className="flex items-end justify-end h-56 w-full bg-cover" style={{
      backgroundImage: `url(${backgroundImageUrl})`
    }}>
      <AddCart />
    </div>
    <div className="px-5 py-3">
      <h3 className="text-gray-700 uppercase">{ItemName}</h3>
      <span className="text-gray-500 mt-2">{ItemPrice}</span>
    </div>
  </div>
)

export default ItemCard