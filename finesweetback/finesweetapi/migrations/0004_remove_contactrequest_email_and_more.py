# Generated by Django 4.2.7 on 2023-11-21 12:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('finesweetapi', '0003_brands'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contactrequest',
            name='email',
        ),
        migrations.AlterField(
            model_name='contactrequest',
            name='message',
            field=models.CharField(blank=True, max_length=300),
        ),
    ]