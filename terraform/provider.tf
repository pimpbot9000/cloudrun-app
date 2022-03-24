provider "google" {
  project     = var.project_id
  region      = "europe-west3"
  zone        = "europe-west3-a"
  credentials = file("credentials-terraform.json")
}
