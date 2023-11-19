# Generated by Django 4.2.7 on 2023-11-15 20:53

import autoslug.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContactRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fullname', models.CharField(max_length=90)),
                ('phoneNumber', models.CharField(max_length=10)),
                ('email', models.CharField(max_length=100)),
                ('message', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.URLField()),
                ('name', models.CharField(max_length=50)),
                ('position', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='FrequentlyQuestion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('text', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='Services',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('previewText', models.CharField(max_length=250)),
                ('previewIcon', models.URLField()),
                ('hoverPreviewIcon', models.URLField()),
                ('mainImage', models.URLField()),
                ('mainTitle', models.CharField(max_length=50)),
                ('mainText', models.CharField(max_length=1500)),
                ('subTitle', models.CharField(max_length=130)),
                ('subText', models.CharField(max_length=750)),
                ('quotation', models.CharField(max_length=350)),
                ('slug', autoslug.fields.AutoSlugField(editable=False, populate_from='name')),
            ],
        ),
    ]