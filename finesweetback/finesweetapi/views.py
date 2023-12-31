from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.generics import get_object_or_404
from rest_framework.viewsets import ModelViewSet

from .models import *
from .serializers import *



class ServicesViewSet(ModelViewSet):
    queryset = Services.objects.all()
    serializer_class = SerializeService

    def get_object(self):
        queryset = self.filter_queryset(self.get_queryset())
        slug = self.kwargs.get('slug')  # Предполагается, что слаг передается через URL
        return get_object_or_404(queryset, slug=slug)

# class PreviewServicesViewSet(ModelViewSet):
#     queryset = ServicesPreview.objects.all()
#     serializer_class = SerializeServicePreview

class FrequentlyQuestionViewSet(ModelViewSet):
    queryset = FrequentlyQuestion.objects.all()
    serializer_class = SerializeFrequentlyQuestions

class EmployeeViewSet(ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = SerializeEmployee

class ContactViewSet(ModelViewSet):
    queryset = ContactRequest.objects.all()
    serializer_class = SerializeContactRequest

class BrandsViewSet(ModelViewSet):
    queryset = Brands.objects.all()
    serializer_class = SerializeBrands
    
