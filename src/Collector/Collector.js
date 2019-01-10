import React, {
    Component
} from 'react'

const API = 'http://127.0.0.1.xip.io/twitter/';
const DEFAULT_QUERY = 'tag/';

class Collector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            twitties: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        fetch(API + DEFAULT_QUERY)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => { 
                this.setState({ twitties: data, isLoading: false })
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { twitties, isLoading, error } = this.state;
        
        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
          <ul>
            {twitties.map(tweet =>
              <li key={tweet.idStr}>
                <h4> {tweet.text} </h4>
              </li>
            )}
          </ul>
        );
      }
}

export default Collector;