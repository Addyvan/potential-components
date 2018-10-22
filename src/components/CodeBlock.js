import React from 'react';
import { Button, ButtonGroup, Row, Col } from 'reactstrap';
import 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism.css';
import './CodeBlock.css';
import { PrismCode } from 'react-prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';

class CodeBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            output: (this.props.defaultOutput === "html") ? "html" : "react",
            copied: "COPY CODE",
            isShowingCode: this.props.isShowingCode
        }

        this.changeOutput = this.changeOutput.bind(this);
        this.copy = this.copy.bind(this);
    }

    copy() {
        this.setState({copied: "Copied!"});
    }

    changeOutput(value) {
        if (this.state.output !== value) {
            this.setState({output: value});
            if ( this.state.copied === "Copied!" ) {
                this.setState({copied: "COPY CODE"});
            }
        }
    }

    render() {
        return (
            <Row className="codeblock" style={(this.props.isShowingCode) ? {"display": "flex", "backgroundColor": "#fafafa", "marginTop": "20px"} : {"display": "none", "backgroundColor": "#fafafa", "marginTop": "20px"} }>
                <Col md="9">
                    <ButtonGroup className="floatLeft">
                        <Button 
                            onClick={ () => this.changeOutput("html") } 
                            style={ (this.state.output === "html") ? {"backgroundColor": "#fafafa", "borderBottomColor": "#5DC1BE"} :  {"backgroundColor": "#fafafa"} }
                            color="default"
                        >
                            HTML
                        </Button>
                        <Button 
                            onClick={ () => this.changeOutput("react") } 
                            style={ (!(this.state.output === "html")) ? {"backgroundColor": "#fafafa", "borderBottomColor": "#5DC1BE"} :  {"backgroundColor": "#fafafa"} }
                            color="default"
                        >
                            REACT
                        </Button>
                    </ButtonGroup>
                </Col>
                <Col md="3">
                    <CopyToClipboard text={ (this.state.output === "html") ? this.props.html : this.props.react }>
                        <Button onClick={ this.copy } style={ {"backgroundColor": "white", "color": "black"} } className="floatRight">
                            { this.state.copied }
                        </Button>
                    </CopyToClipboard>
                </Col>
                <Col md="12">
                    <pre>
                        <PrismCode className={ (this.state.output === "html") ? "language-html" : "language-jsx" }>
                            {(this.state.output === "html") ? this.props.html : this.props.react }
                        </PrismCode>
                    </pre>
                </Col>
            </Row>
        );
    }
}

CodeBlock.propTypes = {
    defaultOutput: PropTypes.string,
    html: PropTypes.string,
    react: PropTypes.string,
    isShowingCode: PropTypes.bool
};

CodeBlock.defaultProps = {
    defaultOutput: "html",
    isShowingCode: true
}

export default CodeBlock;