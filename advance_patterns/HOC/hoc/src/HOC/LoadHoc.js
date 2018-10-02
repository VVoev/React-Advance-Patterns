import React, { Component } from 'react';

const LoadHoc = (loadingProp) => (WrappedComponent) => {
    return class LoadHoc extends Component {


        isEmpty(prop) {
            return (
                prop === null ||
                prop === undefined ||
                (prop.hasOwnProperty('length') && prop.length === 0) ||
                (prop.constructor === Object && Object.keys(prop).length === 0)
            )
        }


        componentWillMount() {
            this.startTimer = Date.now();
            debugger;
        }

        componentWillUpdate() {
            this.endTimer = Date.now();
        }



        render() {
            const myProps = {
                loadTime: ((this.endTimer - this.startTimer) / 1000).toFixed(2)
            }


            return this.isEmpty(this.props[loadingProp]) ? <WrappedComponent style={{ backgroundColor: loadingProp }} {...this.props}  {...myProps} /> : <div>Hello</div>;
        }

    }
};

export default LoadHoc;