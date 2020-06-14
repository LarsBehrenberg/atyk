import styled from "@emotion/styled"

const TagButton = styled.button`
  letter-spacing: 0.05em;
  color: #353535;
  border-color: #353535;
  outline: none;
  position: relative;
  display: inline-block;
  min-width: 120px;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  margin-right: 10px;
  color: rgb(102, 102, 102);
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border: none;

  &:after {
    content: "";
    position: absolute;
    opacity: 0;
    top: 80%;
    height: 1px;
    left: 0px;
    width: 100%;
    -webkit-transition: all 1s;
    transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s;
    background: #353535;
  }
  &:hover:after {
    opacity: 1;
    top: 100%;
  }
  &:hover {
    color: #353535;
    cursor: pointer;
  }

  &.active ::after {
    opacity: 1;
    height: 1px;
    top: 100%;
    left: 0px;
    width: 100%;
    content: "";
    background: #353535;
  }

  &.active {
    color: #353535;
  }
`

export default TagButton
