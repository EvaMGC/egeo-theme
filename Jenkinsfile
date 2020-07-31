@Library('libpipelines@master') _

hose {
    EMAIL = 'front'
    MODULE = 'egeo-themes'
    DEVTIMEOUT = 30
    RELEASETIMEOUT = 30
    REPOSITORY = 'github.com/egeo-theme'
    FOSS = true

    DEV = { config ->
        doCompile(config)
        doDeploy(config)
        doPackage(config)
    }
}
