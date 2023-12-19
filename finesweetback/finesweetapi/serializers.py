from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from .models import *


class SerializeService(ModelSerializer):

    class Meta:
        model = Services
        fields = ['pk','name','mainImage','mainTitle','mainText','subTitle','subText','quotation','previewText','previewIcon','hoverPreviewIcon','slug']
        read_only_fields = ['slug','pk']

class SerializeFrequentlyQuestions(ModelSerializer):

    class Meta:
        model =  FrequentlyQuestion
        fields = ['pk','title','text']
        read_only_fields = ['pk']
    

class SerializeEmployee(ModelSerializer):
    class Meta:

        model = Employee
        fields = ['image','name','position','pk']
        read_only_fields = ['pk']

class SerializeContactRequest(ModelSerializer):

    class Meta:
        model = ContactRequest
        fields = ['pk','fullname','phoneNumber','message']
        read_only_fields = ['pk']


class SerializeBrands(ModelSerializer):

    class Meta:
        model = Brands
        fields = ['pk','name','icon']
        read_only_fields = ['pk']