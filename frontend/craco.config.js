const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { 
                            '@primary-color': '#059669',
                            '@font-size-base': '1.4rem'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};