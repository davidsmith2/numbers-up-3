import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Scoreboard} from './Scoreboard';
import {Tiles} from './Tiles';

const styles = {
	container: {
	},
	paper: {
		margin: '0 auto',
		overflow: 'auto',
		padding: '10px'
	}
};

export class Game extends React.Component {
	render() {
		const children = [
			<Tiles key="tiles" ref="tiles" data={this.props.data} style={styles.tiles} />,
			<Scoreboard key="scoreboard" ref="scoreboard" data={this.props.data} style={styles.scoreboard} />
		];
		return <div className="game" style={styles.container}>
			<MuiThemeProvider>
				<Paper style={styles.paper} zDepth={1} children={children} />
			</MuiThemeProvider>
		</div>;
	}
};
