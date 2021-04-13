#!/bin/bash

# Giving each source file (js file) its destination (md file)

# kernel/resolvers directory
jsdoc2md --files kernel/resolvers/versionSelectResolver.js > docs/kernel/resolvers/versionSelectResolver.md


# kernel/utils directory
jsdoc2md --files kernel/utils/helpers.js > docs/kernel/utils/helpers.md
jsdoc2md --files kernel/utils/globals.js > docs/kernel/utils/globals.md
jsdoc2md --files kernel/utils/setup.js > docs/kernel/utils/setup.md

# For pages, docs should be generated from only one version (functions are the same in all versions)

# Common page
jsdoc2md --files versions/commonPage.js > docs/pages/commonPage.md

# versions/174 directory
jsdoc2md --files versions/174/BO/BObasePage.js > docs/pages/BO/BObasePage.md
jsdoc2md --files versions/174/BO/dashboard/index.js > docs/pages/BO/dashboard.md
jsdoc2md --files versions/174/BO/login/index.js > docs/pages/BO/login.md
jsdoc2md --files versions/174/BO/modules/moduleCatalog/index.js > docs/pages/BO/moduleCatalog.md
jsdoc2md --files versions/174/BO/modules/moduleConfiguration/index.js > docs/pages/BO/moduleConfiguration.md
jsdoc2md --files versions/174/BO/modules/moduleManager/index.js > docs/pages/BO/moduleManager.md
jsdoc2md --files versions/174/BO/catalog/products/index.js > docs/pages/BO/products.md
jsdoc2md --files versions/174/BO/catalog/products/add.js > docs/pages/BO/addProduct.md