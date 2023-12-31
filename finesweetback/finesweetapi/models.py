from django.db import models
from autoslug import AutoSlugField
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.utils.text import slugify


class FrequentlyQuestion(models.Model):

    title = models.CharField(max_length=50)
    text = models.CharField(max_length=500)


class ContactRequest(models.Model):
    
        fullname = models.CharField(max_length=90)
        phoneNumber = models.CharField(max_length=10)
        message = models.CharField(max_length=300,blank=True)

class Services(models.Model):
      
      name = models.CharField(max_length=50)
      mainImage = models.URLField(blank=True)
      mainTitle = models.CharField(max_length=130, blank=True)
      mainText = models.CharField(max_length=1500, blank=True)
      subTitle = models.CharField(max_length=130, blank=True)
      subText = models.CharField(max_length=750, blank=True)
      quotation = models.CharField(max_length=350, blank=True)
      previewText = models.CharField(max_length=250, blank=True) 
      previewIcon = models.URLField(blank=True)
      hoverPreviewIcon = models.URLField(blank=True)
      slug = AutoSlugField(populate_from='name', unique=True)      

@receiver(pre_save, sender=Services)
def update_slug(sender, instance, **kwargs):
    instance.slug = slugify(instance.name)

class Employee(models.Model):
      
      image = models.URLField()
      name = models.CharField(max_length=50)
      position = models.CharField(max_length=50)
      

class Brands(models.Model):

      icon = models.URLField()
      name = models.CharField(max_length=9)
      

      
      