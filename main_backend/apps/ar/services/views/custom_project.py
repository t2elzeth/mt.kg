import json

from django.contrib.staticfiles.finders import find


def load_json_from_static(static_path):
    with open(find(static_path)) as f:
        return json.load(f)


def get_context(all_projects: dict, project_name) -> dict:
    return all_projects.get(project_name)
