resource "google_container_registry" "registry" {
  project  = var.project_id
  location = "EU"
}

resource "google_project_service" "containerregistry_api" {
  service = "containerregistry.googleapis.com"
  disable_on_destroy = true
}

resource "google_project_service" "cloudbuild_api" {
  service = "cloudbuild.googleapis.com"
  disable_on_destroy = true
}

# Required by cloud run service
resource "google_project_service" "cloudrun_api" {
  service = "run.googleapis.com"
  disable_on_destroy = true
}


resource "google_cloud_run_service" "cloudrun_service" {
  name = "app"
  location = "europe-west6"

  template {
    spec {
      containers {
        image = "eu.gcr.io/${var.project_id}/${var.image_name}:latest"        
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }

  # Waits for the Cloud Run API to be enabled
  depends_on = [ google_project_service.cloudrun_api ]
}

output "cloudrun_url" {
  value = google_cloud_run_service.cloudrun_service.status[0].url//.ip_address
}