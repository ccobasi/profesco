echo "Switching to branch main"
git checkout main

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* admin@178.79.129.158:/var/www/178.79.129.158/

echo "Done!"