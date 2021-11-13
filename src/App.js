import React from 'react';

export default class App extends React.Component{ 
  
  
  constructor(props) {
    super(props);
    this.state = {
      rows:6,
      columns: 7,
      moves: [],
      currentX: null,
      currentY:null,
      //red goes first
      playerTurn: 'red',
      //blank board
      winner: null,
        boardArray: [
          ['white','white','white','white','white','white','white'],
          ['white','white','white','white','white','white','white'],
          ['white','white','white','white','white','white','white'],
          ['white','white','white','white','white','white','white'],
          ['white','white','white','white','white','white','white'],
          ['white','white','white','white','white','white','white']
        ],
      
    };
    
  }
  checkForWinner(x,y){

    let counter =0;
    let color=null;

    for(let c=0;c<6;c++)
    {
      counter =0;
      for(let i =0; i<=6;i++)
      {
        console.log("H "+c+" "+ i)
        console.log(this.state.boardArray[c][i])
        console.log(this.state.boardArray[c][i]===(this.state.boardArray[c][i+1]))
        if((this.state.boardArray[c][i]===(this.state.boardArray[c][i+1]))&& 'white' !==this.state.boardArray[c][i]  )
        {
          counter++;
          console.log("Line 45 "+counter);
          color=this.state.boardArray[c][i];
        }

      };
      if (counter ==4){
        console.log("WIN")
        this.setState({winner:color});
      };

    }
   
   
   
   
    //componentDidUpdate(){
    
//};
   


    console.log("END")
  };
   
  onTurn(x,y)  {
    this.state.currentX = x;
    this.state.currentY = y;

    

    //if the current turn is red, we set the state of the boardArray of the clicked cell to 'red' and then we change turn to yellow
    if (this.state.playerTurn === 'red' && this.state.boardArray[x][y]==='white'){
      this.setState((prevState) => ({
        boardArray: prevState.boardArray.map((column, i) =>
          column.map((cell, j) => (i === x && j === y ? this.state.playerTurn : cell))
        ),
      }));
      
      this.setState({playerTurn:'yellow'});
      
    };
    //if the current turn is yello, we set the state of the boardArray of the clicked cell to 'yellow' and then we change turn to red
    if (this.state.playerTurn === 'yellow'&& this.state.boardArray[x][y]==='white'){
      this.setState((prevState) => ({
        boardArray: prevState.boardArray.map((column, i) =>
          column.map((cell, j) => (i === x && j === y ? this.state.playerTurn : cell))
        ),
      }));
  
      this.setState({playerTurn:'red'});
      
    };
    
    
    
  };

  componentDidUpdate(){
    this.checkForWinner(this.currentX,this.currentY);
  };
  
  

  renderBoard(){
    const { rows, columns } = this.state;
    const rowArray = [];
    //2D array renders the board 
    for ( let row = 0; row < this.state.rows; row += 1){
      const columnArray = [];
      for ( let column = 0; column < this.state.columns; column +=1){
      
        columnArray.push(<div onClick = {()=>{this.onTurn(row,column)}}  style = {{width: '7vw', height:'7vw', backgroundColor: this.state.boardArray[row][column], border: '1px solid  black', cursor: 'pointer'}}></div>);
                
      }
      rowArray.push(
        <div style =  {{display: 'flex', flexDirection: 'row'}}>{columnArray}</div>
      );
    }
    return (
      <div >
        <div > 
      {"winner:" +this.state.winner}
        </div>
        {rowArray}
      </div>
    );
  }

  render(){
    const{style} = this.props;

    return(
      <div style = {style ? Object.assign({}, styles.container, style): styles.container}>
        <div>{this.renderBoard()}</div>
      </div>
    );
  }
}

const styles = {
  container: {
    height: '100%',
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}