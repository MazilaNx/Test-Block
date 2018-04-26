import styled from 'styled-components'

const StyledWidget = styled.div`
  width: 975px;
  height: 450px;
  border: 0px ;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  background: rgba(37, 45, 71, 0.93);
  transition: height 0.3s, width 0.3s linear;
  overflow: hidden;

  .title {
    font-size: 30px;
  }

  .handle {
    cursor: move;
  }
  
  .scrollbars > div {
    overflow-x: hidden!important;
  }

  .wrapper-header-table {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    
    .title-table {
      font-size: 18px;
      color: #fff;
    }
    
    .arrow {
      object-fit:cover;
      margin-top: -4px;
      width: 30px;
      height: 30px;
      transition: all 0.3s linear;
      transform: rotate(180deg);
      cursor: pointer;

      &.closed {
        transform: rotate(0deg);
      }
    }
  }
  
  .table-wrapp {
    width: 80%;
    padding: 0 10%;
        
    .title-row {
      border-bottom: 1px solid rgba(253, 253, 253, 0.31);
      display: flex;
      padding: 0 25px;
      
      .item-title-row {
        margin: 0 10px;
          padding: 10px 2px;
          font-size: 20px;
          color: rgba(253, 253, 253, 0.51);
          position: relative;
          z-index: 100;
          
          
           &:first-child {
                 margin: 0 30px 0 10px;
               }
               
               &:nth-child(2) {
                 margin: 0 5px 0 5px;
               }
               
               &:nth-child(3) {
                 margin: 0 50px 0 5px;
               }
               
               &:nth-child(4) {
                 margin: 0 5px 0 50px;
               }
               
               &:nth-child(5) {
                 margin: 0 5px 0 5px;
               }
               
               &:nth-child(6) {
                 margin: 0 10px 0 30px;
               }
      }
    }
    
    .content-table {
        height: 280px;
        overflow-y:auto;
        overflow-x: hidden;
        
        .scrollbars > div {
            &:last-child {
                width:15px!important;
                border-radius:20px!important;
                div {
                    background: rgba(52, 108, 168, 0.75) !important;
                }
            }
        }
        
        
        .content-row {
           position: relative;
           border-bottom: 1px solid rgba(253, 253, 253, 0.31);
           display: flex;
           padding: 0 25px;
           
           .overlay-wrapper {
             position: absolute;
             top: 0;
             left: 0;
             display: flex;
             height: 100%;
             width: 100%;

             .left {
               position: absolute;
               width: 20px;
               
               background: rgba(74, 142, 82, 0.75);
               height: 100%;
               border-top: 1px solid #6ff87c;
               border-left: 1px solid #6ff87c;
             }

             .right {
               position: absolute;
               width: 20px;
               left: 50%;
               background: rgba(65, 99, 210, 0.75);
               height: 100%;
               border-top: 1px solid #9ab2ff;
               border-right: 1px solid #9ab2ff;
             }
           }
          
          .item-row {
              background: #20273f;
               margin: 0 10px;
               display: flex;
               justify-content: center;
               align-items: center;
               padding: 10px 2px;
               font-size: 14px;
               color: rgba(253, 253, 253, 0.75);
               
               &:first-child {
                 margin: 0 30px 0 10px;
               }
               
               &:nth-child(2) {
                 margin: 0 5px 0 5px;
               }
               
               &:nth-child(3) {
                 margin: 0 50px 0 5px;
               }
               
               &:nth-child(4) {
                 margin: 0 5px 0 50px;
               }
               
               &:nth-child(5) {
                 margin: 0 5px 0 5px;
               }
               
               &:nth-child(6) {
                 margin: 0 10px 0 30px;
               }
            }
          }
        }
    }
  }
`

export { StyledWidget }
