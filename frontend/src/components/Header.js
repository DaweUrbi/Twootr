import React from 'react';

export default class Header extends React.Component {
	state = {
		toggle: 0
  	}

	toggleFunc(to){
		this.setState({
			toggle: to
	   });
	}

	changeName(name){
		const na = name.replace(new RegExp(" ", "g"), '-').toLowerCase();
		const su = this.props.surname.replace(new RegExp(" ", "g"), '-').toLowerCase();
	    this.props.updateName( name );
	    this.props.updateNick( na + "-" + su );
	}

	changeSurname(surname){
		const na = this.props.name.replace(new RegExp(" ", "g"), '-').toLowerCase();
		const su = surname.replace(new RegExp(" ", "g"), '-').toLowerCase();
	    this.props.updateSurname( surname );
	    this.props.updateNick( na + "-" + su );
	}

    render() {
        return (
            <>
				<div style={{ backgroundColor: '#413f42', width: '100%', height: 170 }}>
					<img alt="0" style={{ paddingTop: '10px', width: '100px', height: '100px' }} src={`https://avatars.dicebear.com/api/bottts/${this.props.nick}.svg`} />
						<div style={{ display: this.state.toggle === 1 ? 'none' : 'block', height: '25px', border: '0px solid white', color: 'white' }}>
							<span className="kanit600">{ this.props.name }</span> <span>{ this.props.surname }</span>
							<img onClick={ () => this.toggleFunc(1)} alt="0" style={{ paddingTop: '4px', paddingLeft: '5px', width: '17px', height: '17px' }} src="edit.png"/>
						</div>
						<div style={{ display: this.state.toggle === 0 ? 'none' : 'block', height: '25px', border: '0px solid white', color: 'white' }}>
							<input onChange={ e => this.changeName(e.target.value) } type="text" value={ this.props.name } />
							<input onChange={ e => this.changeSurname(e.target.value) } type="text" value={ this.props.surname } />
							<img onClick={ () => this.toggleFunc(0)} alt="0" style={{ paddingTop: '4px', paddingLeft: '5px', width: '17px', height: '17px' }} src="ok.png"/>
						</div>
						<div style={{ fontSize: '12px', color: 'white' }}>
							<span className="kanit300">@{ this.props.nick }</span>
						</div>
				</div>
            </>
        )
      }
}