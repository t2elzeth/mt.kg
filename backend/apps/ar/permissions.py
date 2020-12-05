from rest_framework import permissions


class IsSuperUser(permissions.BasePermission):
    message = 'You are not a superuser'

    def has_permission(self, request, view):
        print(request.user.is_superuser)
        return request.user.is_superuser
