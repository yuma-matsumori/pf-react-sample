import Btn from './Btn'

type Props = {
  btn: {
  label: string,
  url: string
  },
  btn2: {
    label: string,
    url: string
    },
    btn3: {
      label: string,
      url: string
      },
      btn4: {
        label: string,
        url: string
        },
} 

const BtnSection = ({ btn,btn2,btn3,btn4 }: Props) => {
    if (
      isBtnProps( btn.label, btn.url) 
    || isBtnProps( btn2.label, btn2.url)
    || isBtnProps( btn3.label, btn3.url)
    || isBtnProps( btn4.label, btn4.url)
    ){
      return (
        <>
        <div className="container BtnSection">
          {isBtnProps( btn.label, btn.url) && <Btn label={btn.label} url={btn.url} />}
          {isBtnProps( btn2.label, btn2.url) && <Btn label={btn2.label} url={btn2.url} />}
          {isBtnProps( btn3.label, btn3.url) && <Btn label={btn3.label} url={btn3.url} />}
          {isBtnProps( btn4.label, btn4.url) && <Btn label={btn4.label} url={btn4.url} />}
        </div>
          </>
      )
     } else{
      return( null )
     }
}

const isBtnProps = (label, url) :boolean => {
if (label && url) {
  return true
}else{
  return false
 }
}

export default BtnSection
