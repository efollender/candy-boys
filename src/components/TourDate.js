const React = require('react');

let TourDate = React.createClass({
	render(){
		let date = this.props.date;
		let venue = date.venue || 'TBA';
		let formattedDate = date.date.month + " " + date.date.day;
		return (
			<div className="small-4 columns tourDate">
		        <div className="cube rotate labels">
		              <span className="top side"></span>
		              <span className="left side">
		              	 <h4>{ date.city }, { date.state }</h4>
		              </span>
		              <span className="right side">
		             	<p>@ { venue }<br/>
				        	{ formattedDate }
				        </p>
		              </span>
		              <span className="bottom side">
		                <span className="back side"></span>
		              </span>
		          </div>
		    </div>
		);
	}
});

module.exports = TourDate;