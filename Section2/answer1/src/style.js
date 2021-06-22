import styled from 'styled-components'

export const ContainerStyle = styled.div`
  display: flex;
  height: 100vw;

  .left-box {
    width: 200px;
    border: 1px solid;
  }

  .middle-box {
    flex: 1;
    min-width: 100px;
    border: 1px solid;

    @media (max-width: 600px) {
      overflow-y: scroll;

      .select-box {
        width: 150px;
      }
    }
  }

  .right-box {
    width: 300px;
    border: 1px solid;
  }
`