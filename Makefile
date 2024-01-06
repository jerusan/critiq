.PHONY: all build_frontend build_backend install_frontend export_frontend install_backend run_backend

all: build_frontend build_backend

# use it when running first time to install dependencies
build_all: build_frontend build_backend

install_frontend:
	cd frontend && npm install

# use it when rebuilding frontend
export_frontend:
	cd frontend && npm run export

build_frontend: install_frontend export_frontend



install_backend:
	cd backend && pip install --no-cache-dir -r requirements.txt

# use it to run backend server
run_backend:
	cd backend && flask run

build_backend: install_backend run_backend