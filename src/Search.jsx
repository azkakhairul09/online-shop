import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row" id="search_manu" style={{marginTop: 10}}>
                    <div className="col-md-6 col-xs-12">
                        <form name="quick_find">
                        <div className="form-group">
                            <div className="input-group">
                            <input type="text" placeholder="Enter search keywords here" className="form-control input-lg" id="inputGroup" />
                            <span className="input-group-addon">
                                <a href="#" style={{color: 'white'}}>Search</a>
                            </span>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <form name="manufacturers"> 
                        <div className="form-group">
                            <div className>
                            <select style={{fontSize: 14, background: '#EAEAEA', border: 'none'}} name="manufacturers_id" size={1} className="input-lg form-control arrow-hide date_class">
                                <option value selected="selected">Please Select manufacturers</option>
                                <option>lorem</option>
                                <option>lorem</option>
                                <option>lorem</option>
                                <option>lorem</option>
                            </select>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
