npm run build
cd build
git init
git remote add origin https://github.com/gregfagan/gregfagan.github.io.git
git checkout --orphan master
git add --all
git commit -m "Publishing"
git push origin master -f