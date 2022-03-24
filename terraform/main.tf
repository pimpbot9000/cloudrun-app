resource "google_container_registry" "registry" {
  project  = var.project_id
  location = "EU"
}

resource "google_project_service" "containerregistry_api" {
  service = "containerregistry.googleapis.com"
}

resource "google_project_service" "cloudbuild_api" {
  service = "cloudbuild.googleapis.com"
}