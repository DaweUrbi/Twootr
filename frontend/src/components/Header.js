import React from 'react';
import { Div, Avatar, ToogleOne, ToogleTwo, ImgEdit, ImgOk, AuthorSlug } from './styles/Header.styles';

export default class Header extends React.Component {
	state = {
		toggle: 1
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
				<Div>
					<Avatar alt="0" src={`https://avatars.dicebear.com/api/bottts/${this.props.nick}.svg`} />
						<ToogleOne toggle={this.state.toggle}>
							<span className="kanit600">{ this.props.name }</span> <span>{ this.props.surname }</span>
							<ImgEdit onClick={ () => this.toggleFunc(false)} alt="0" src="edit.png"/>
						</ToogleOne>
						<ToogleTwo toggle={this.state.toggle}>
							<input onChange={ e => this.changeName(e.target.value) } type="text" value={ this.props.name } />
							<input onChange={ e => this.changeSurname(e.target.value) } type="text" value={ this.props.surname } />
							<ImgOk onClick={ () => this.toggleFunc(true)} alt="0" src="ok.png"/>
						</ToogleTwo>
						<AuthorSlug>
							@{ this.props.nick }
						</AuthorSlug>
				</Div>
            </>
        )
      }
}