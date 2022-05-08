module "cloudrun" {
  source     = "./cloudrun"
  name       = "app"
  project_id = var.project_id
  image_name = var.image_name
  location   = var.region
}

output "url" {
  value = module.cloudrun.cloudrun_url
}

