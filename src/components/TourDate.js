const React = require('react');

let TourDate = React.createClass({
	render(){
		let date = this.props.date;
		let venue = date.venue || 'TBA';
		let formattedDate = date.date.month + " " + date.date.day;
		return (
			<div className="large-3 medium-6 small-12 columns tourDate">
        <h4>{ date.city }, { date.state }</h4>
        <p>@ { venue }<br/>
        			{ formattedDate }
        </p>
      </div>
		);
	}
});

module.exports = TourDate;