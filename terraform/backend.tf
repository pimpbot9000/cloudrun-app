terraform {
  backend "gcs" {
    bucket  = "tf-state-gybsyregister"
    prefix  = "terraform/state"
  }
}