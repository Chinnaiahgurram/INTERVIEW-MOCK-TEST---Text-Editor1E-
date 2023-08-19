import {Component} from 'react'
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineUnderline,
} from 'react-icons/ai'
import {
  BgContainer,
  EditorAndInputContainer,
  ImageContainer,
  Image,
  Heading,
  InputContainer,
  ToolUl,
  ToolLi,
  Button,
  TextArea,
} from './styledComponents'

class Home extends Component {
  state = {isBold: false, isItalic: false, isUnderLine: false}

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderLine = () => {
    this.setState(prevState => ({isUnderLine: !prevState.isUnderLine}))
  }

  render() {
    const {isBold, isItalic, isUnderLine} = this.state
    const boldLogo = isBold ? '#faff00' : '#f1f5f9'
    const ItalicLogo = isItalic ? '#faff00' : '#f1f5f9'
    const UnderLineLogo = isUnderLine ? '#faff00' : '#f1f5f9'

    return (
      <BgContainer>
        <EditorAndInputContainer>
          <ImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <InputContainer>
            <ToolUl>
              <ToolLi>
                <Button
                  data-testid="bold"
                  onClick={this.onClickBold}
                  changeText={boldLogo}
                >
                  <AiOutlineBold size={30} />
                </Button>
              </ToolLi>
              <ToolLi>
                <Button
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  changeText={ItalicLogo}
                >
                  <AiOutlineItalic size={30} />
                </Button>
              </ToolLi>
              <ToolLi>
                <Button
                  data-testid="underline"
                  onClick={this.onClickUnderLine}
                  changeText={UnderLineLogo}
                >
                  <AiOutlineUnderline size={30} />
                </Button>
              </ToolLi>
            </ToolUl>
            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderLine={isUnderLine}
            />
          </InputContainer>
        </EditorAndInputContainer>
      </BgContainer>
    )
  }
}

export default Home

// import {Component} from 'react'
// import {VscBold} from 'react-icons/vsc'
// import {GoItalic} from 'react-icons/go'
// import {AiOutlineUnderline} from 'react-icons/ai'
// import {
//   MainDiv,
//   CardDiv,
//   LeftDiv,
//   LeftH1,
//   LeftImg,
//   RightDiv,
//   ToolUl,
//   ToolLi,
//   Button,
//   TextArea,
// } from './styledComponents'

// class Home extends Component {
//   state = {isBold: false, isItalic: false, isUnderline: false}

//   onClickBold = () => {
//     this.setState(prevState => ({isBold: !prevState.isBold}))
//   }

//   onClickItalic = () => {
//     this.setState(prevState => ({isItalic: !prevState.isItalic}))
//   }

//   onClickUnderline = () => {
//     this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
//   }

//   render() {
//     const {isBold, isItalic, isUnderline} = this.state
//     const boldLogo = isBold ? '#faff00' : '#f1f5f9'
//     const italicLogo = isItalic ? '#faff00' : '#f1f5f9'
//     const underlineLogo = isUnderline ? '#faff00' : '#f1f5f9'

//     return (
//       <MainDiv>
//         <CardDiv>
//           <LeftDiv>
//             <LeftH1>Text Editor</LeftH1>
//             <LeftImg
//               src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
//               alt="text editor"
//             />
//           </LeftDiv>
//           <RightDiv>
//             <ToolUl>
//               <ToolLi>
//                 <Button
//                   data-testid="bold"
//                   colorText={boldLogo}
//                   onClick={this.onClickBold}
//                 >
//                   <VscBold size={25} />
//                 </Button>
//               </ToolLi>
//               <ToolLi>
//                 <Button
//                   data-testid="italic"
//                   colorText={italicLogo}
//                   onClick={this.onClickItalic}
//                 >
//                   <GoItalic size={25} />
//                 </Button>
//               </ToolLi>
//               <ToolLi>
//                 <Button
//                   data-testid="underline"
//                   colorText={underlineLogo}
//                   onClick={this.onClickUnderline}
//                 >
//                   <AiOutlineUnderline size={25} />
//                 </Button>
//               </ToolLi>
//             </ToolUl>
//             <TextArea
//               isBold={isBold}
//               isUnderline={isUnderline}
//               isItalic={isItalic}
//             />
//           </RightDiv>
//         </CardDiv>
//       </MainDiv>
//     )
//   }
// }
// export default Home
