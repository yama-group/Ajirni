from django.contrib import admin

# Register your models here.
from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['id', 'username', 'first_name', 'last_name', 'email', 'phone', 'image_url',
                    'is_superuser', 'is_staff', 'is_active', 'date_joined', 'last_login']


admin.site.register(CustomUser, CustomUserAdmin)
