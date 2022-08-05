import React from 'react';

export default class Navbar extends React.Component {

    render() {
        return (
            <>
				<div style={{ width: '100%', height: '30px', backgroundColor: '#711a75' }}>
                    <table style={{ width: '100%' }}>
                        <tbody>
                            <tr>
                                <td align="left" style={{ paddingLeft: 15 }}>
                                    <div className="logo permanentMarker">Twootr</div>
                                </td>
                                <td onClick={ () => document.getElementById('inputTwoot').focus() } align="right" style={{ paddingRight: 15, color: 'white' }}>
                                    <span className="kanit600">Write</span>
                                    <span className="kanit300"> a new twoot</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
				</div>
            </>
        )
    }
}