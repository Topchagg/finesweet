# Generated by Django 4.2.7 on 2023-12-08 09:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('finesweetapi', '0004_remove_contactrequest_email_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='brands',
            name='name',
            field=models.CharField(default=2, max_length=9),
            preserve_default=False,
        ),
    ]
