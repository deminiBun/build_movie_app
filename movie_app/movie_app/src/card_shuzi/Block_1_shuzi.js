<script type="text/javascript" src="../js/react.developnt.js"></script>;

<script type="text/babel">
  //创建组件 
  class Life extends React.Component{
  
    death = () => {
      //卸载组件
      ReactDOM.unmountComponentAtNode(document.getElementsById("test"))
  }


  render() {
    return(
        <div>
            <h2> Block </h2>
            <button onClick={this.death}> Block this </button>
        </div>

    )
  }
}

</script>;
