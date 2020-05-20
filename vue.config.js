module.exports = {
	pwa: {
		name: 'Blog Ghibli',
		themeColor: '#F5F5F0',
		msTileColor: '#000000',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: 'black',
		manifestOptions: {
			display: 'fullscreen'
		},

		workboxPluginMode: 'InjectManifest',
		workboxOptions: {
			swSrc: 'src/service-worker.js'
		}
	}
}