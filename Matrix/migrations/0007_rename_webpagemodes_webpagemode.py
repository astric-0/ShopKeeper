# Generated by Django 3.2.8 on 2022-04-01 16:26

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Matrix', '0006_webpagemodes_user'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='WebPageModes',
            new_name='WebPageMode',
        ),
    ]
