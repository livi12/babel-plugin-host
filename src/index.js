
module.exports = function ({
        types: t
    }, states) {
    var httpProtocol = states && states.protocol+'://'|| 'http://';
	return {
		name: 'protocol-change',
		visitor: {
            "StringLiteral|TemplateElement"(path) {
                path.node.value=path.node.value.replace(/^http(s)?\:\/\//, httpProtocol)
                
            }
		}
	}
}