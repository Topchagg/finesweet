from django.contrib import admin

from .models import *

admin.site.register(Services)
admin.site.register(ServicesPreview)
admin.site.register(Employee)
admin.site.register(ContactRequest)
admin.site.register(FrequentlyQuestion)