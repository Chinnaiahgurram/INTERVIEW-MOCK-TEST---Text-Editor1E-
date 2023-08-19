import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const EditorAndInputContainer = styled.div`
  background-color: #1b1c22;
  height: 80%;
  width: 80%;
  display: flex;
`

export const ImageContainer = styled.div`
  height: 600px;
  width: 500px;
`
export const Image = styled.img`
  max-height: 500px;
  max-width: 400px;
  margin-left: 50px;
  margin-top: 50px;
`
export const Heading = styled.h1`
  color: white;
  font-family: 'Roboto';
  font-size: 30px;
  margin-left: 30px;
  margin-top: 40px;
  text-align: center;
`

export const InputContainer = styled.div`
  height: 450px;
  width: 600px;
  background-color: #25262c;
  margin-top: 40px;
  margin-bottom: 50px;
`

export const ToolUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`
export const ToolLi = styled.li`
  display: flex;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  color: ${props => props.changeText};
`

export const TextArea = styled.textarea`
  height: 100%;
  background-color: #25262c;
  border: none;
  border-top: 2px solid #334155;
  width: 100%;
  outline: none;
  font-size: 20px;
  color: #f8fafc;
  padding: 20px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderLine ? 'underline' : 'normal')};
`

// `
// export const TextArea = styled.textarea`
//   height: 100%;
//   background-color: #25262c;
//   border: none;
//   border-top: 2px solid #334155;
//   width: 100%;
//   outline: none;
//   font-size: 20px;
//   font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
//   color: #f8fafc;
//   padding: 20px;
//   text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
//   font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
// `
