# deploy.sh

#!/usr/bin/env sh

# abort on errors
set -e

# build
#echo Linting..
#npm run lint
echo Building. this may take a minute...
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'example.com' > CNAME

echo Deploying..
git init
git add -A
git commit -m 'deploy'

# deploy
git push --set-upstream -f git@github.com:abats/inkpot-darter.git gh-pages

cd -
