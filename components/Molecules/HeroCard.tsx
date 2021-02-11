import Button from "../Atoms/Button/Button"

type Props = {
  width: 'full' | 'half',
  backgroundImageUrl: string,
  title: string,
  description: string,
  ButtonType: 'Primary' | 'Secondary',
  ButtonText: string,
  ButtonIsArrowIcon: boolean
}

const HeroCard = ({ width, backgroundImageUrl, title, description, ButtonType, ButtonText, ButtonIsArrowIcon }: Props) => {

  let classes = ''
  if (width === 'full') {
    classes = 'h-64 rounded-md overflow-hidden bg-cover bg-center'
  } else {
    classes = 'w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2'
  }

  return (
    <div className={classes} style={{
      backgroundImage: `url('${backgroundImageUrl}')`
    }}>
      <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
        <div className="px-10 max-w-xl">
          <h2 className="text-2xl text-white font-semibold">{title}</h2>
          <p className="mt-2 text-gray-400">{description}</p>
          <Button type={ButtonType} text={ButtonText} isArrowIcon={ButtonIsArrowIcon} />
        </div>
      </div>
    </div>
  )
}

export default HeroCard