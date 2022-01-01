module.exports = {
	chainWebpack: config => {
		config.plugin('html')
			.tap(args => {
				args[0].title = 'Mariage Gautier & Ann-Sophie - 21mai.be';
				return args;
			})
	}
}
