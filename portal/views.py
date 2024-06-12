from typing import Any
from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from rest_framework.views import APIView 
from rest_framework.response import Response 
from .models import Portal

# Create your views here.
def home(request):
    return render(request,'portal/home.html')

def about(request):
   return render(request,'portal/about.html')

def choices(request):
   return render(request,'portal/choices.html')

def faqs(request):
   return render(request,'portal/faqs.html')

def list(request):
   return render(request,'portal/list.html')

def or_cr(request):
   return render(request,'portal/or_cr.html')




class PortalChartView(TemplateView):
   template_name='portal/choices.html'

   def get_context_data(self, **kwargs):
      context=super().get_context_data(**kwargs)
      context["qs"]=Portal.objects.all()
      return context

   

