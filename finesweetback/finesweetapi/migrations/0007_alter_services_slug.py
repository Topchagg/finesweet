# Generated by Django 4.2.7 on 2023-12-19 11:06

import autoslug.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('finesweetapi', '0006_delete_servicespreview_alter_services_maintitle'),
    ]

    operations = [
        migrations.AlterField(
            model_name='services',
            name='slug',
            field=autoslug.fields.AutoSlugField(editable=False, populate_from='name', unique=True),
        ),
    ]
