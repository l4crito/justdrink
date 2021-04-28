m= 'Autogenerado'
port=4200
deploy:
	ng build --prod;
	firebase deploy;
	
commit:
	git add .;
	git commit -m '$(m)';
	git push
	ng build --prod;
	rm -rf /home/christian/Proyectos/cloudadmin/firebase/public/*;
	cp -r dist/cloudadmin/* /home/christian/Proyectos/cloudadmin/firebase/public/;
	cd /home/christian/Proyectos/cloudadmin/firebase/public/ && firebase deploy;

install:
	yarn install;

run:
	sudo ng serve --watch --poll 2000 --hmr --host 0.0.0.0;

pid:
	sudo lsof -i :$(port)

kill:
	sudo kill -9 $(pid)	

module:
	ng g m $(module) --route=$(module) -m=app 

docker-image:
	docker image build -t cloudadmin:1.0 .

docker-run:
	docker container run --publish 9002:8080 --detach --name ca cloudadmin:1.0
scss:
	sass --watch src/assets/themes/:src/assets/themes/



