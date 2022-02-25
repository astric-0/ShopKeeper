from django.contrib import admin
from django.urls import path
from Matrix import views as MatrixViews

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('test/', MatrixViews.Tester, name='test')
]
