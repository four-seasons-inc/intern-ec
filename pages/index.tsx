import Layout from '../components/Templates/Layout'
import HeroCard from "../components/Molecules/HeroCard"
import ItemCard from "../components/Molecules/ItemCard"

const Home = () => (
  <Layout title="Home | Sample e-commerce">
    <div className="container mx-auto px-6">

      <HeroCard
        width="full"
        backgroundImageUrl="https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144" title="Sport Shoes"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur."
        ButtonType='Primary'
        ButtonText="Shop Now"
        ButtonIsArrowIcon={true}
      />

      <div className="md:flex mt-8 md:-mx-4">
        <HeroCard
          width="half"
          backgroundImageUrl="https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" title="Back Pack"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur."
          ButtonType='Secondary'
          ButtonText="Shop Now"
          ButtonIsArrowIcon={true}
        />
        <HeroCard
          width="half"
          backgroundImageUrl="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" title="Games"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur."
          ButtonType='Secondary'
          ButtonText="Shop Now"
          ButtonIsArrowIcon={true}
        />
      </div>

      <div className="mt-16">
        <h3 className="text-gray-600 text-2xl font-medium">Fashions</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          <ItemCard backgroundImageUrl='https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80' ItemName="Chanel" ItemPrice="$12" />
          <ItemCard backgroundImageUrl='https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80' ItemName="Man Mix" ItemPrice="$12" />
          <ItemCard backgroundImageUrl='https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' ItemName="Classic watch" ItemPrice="$12" />
          <ItemCard backgroundImageUrl='https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80' ItemName="woman mix" ItemPrice="$12" />
        </div>
      </div>

    </div>

  </Layout >
)

export default Home
