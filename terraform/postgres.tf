resource "google_project_service" "sqladmin_api" {
  service            = "sqladmin.googleapis.com"
  disable_on_destroy = true
}

resource "google_sql_database_instance" "main" {
  name             = "main-instance5"
  database_version = "POSTGRES_11"
  region           = var.region

  settings {
    tier = "db-f1-micro"
  }

  deletion_protection  = "true"
}

resource "google_sql_database" "database" {
  name     = "gybsyregister"
  instance = google_sql_database_instance.main.name
}
