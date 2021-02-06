npm run build

cd dist


git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:gderazon87/flambu-frontend.git master:gh-pages

cd -