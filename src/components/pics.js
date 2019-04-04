
import React, { Component } from 'react';


class Pics extends React.Component {

        render() {
            let names = ['black-panther', 'black-widow', 'captain-america', 'captain-marvel'].map( (name, index) => {
                return <img key={index} className="img-responsive" alt="" src={require(`../../images/${name}.jpg`)} />
            } );
            let names2 = ['dr.strange', 'hawk-eye','hulk','iron-man'].map( (name, index) => {
                return <img key={index} className="img-responsive" alt="" src={require(`../../images/${name}.jpg`)} />
            } );
            let names3 = ['loki','spiderman','thanos','thor'].map( (name, index) => {
                return <img key={index} className="img-responsive" alt="" src={require(`../../images/${name}.jpg`)} />
            } );
            return (
                <div className="container">
                    <div className="row">
                        <div className="">
                            { names }
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="">
                            { names2 }
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="">
                            { names3 }
                        </div>
                    </div>
                </div>
            );
    }
}

export default Pics;