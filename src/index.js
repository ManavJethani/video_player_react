import React from 'react';
import ReactDom from 'react-dom';
import YTsearch from 'youtube-api-search';
import Searchbar from './searchbar';
import Videolist from './videolist'
import Videodetail from './videodetail/videodetaillist'
// import '../style'

const Key = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx' ;
const term = 'bom diggy diggy'


class App extends React.Component {
    constructor(props) {
        super(props);   

        this.state = {videos : [],
        SelectedVideo : null}

        this.Onsearchterm(term);
    }
        Onvideoselected(SelectedVideo){
           this.setState({SelectedVideo})
        }
        

        Onsearchterm(term){
            
            YTsearch({key : Key, term : term}, (videos) => {
                
                this.setState({videos : videos,
                SelectedVideo : videos[0]}  );  
            });
        }

            render(){

                return (
                        <div>
                        <header>
                            <Searchbar onsearchvideo = {this.Onsearchterm.bind(this)}/>
                        </header>
                        <main>
                            <Videolist videos = {this.state.videos}
                                    videoclick = {this.Onvideoselected.bind(this)} />
                            <Videodetail video = {this.state.SelectedVideo}/>
                        </main>
                        </div>
                   
                )
            }
        }
      


ReactDom.render(<App /> , document.querySelector('#root'));