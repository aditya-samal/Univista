from django.urls import path
from . import views
urlpatterns = [
    path('', views.home, name='portal-home'),
    path('about/', views.about, name='portal-about'),
    path('choices/', views.choices, name='portal-choices'),
    path('faqs/', views.faqs, name='portal-faqs'),
    path('list/', views.list, name='portal-list'),
    path('or_cr/', views.or_cr, name='portal-or_cr'),
    

]
