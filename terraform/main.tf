resource "google_container_registry" "registry" {
  project  = var.project_id
  location = "EU"
}

resource "google_project_service" "containerregistry_api" {
  service = "containerregistry.googleapis.com"
}
