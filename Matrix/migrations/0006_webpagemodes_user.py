# Generated by Django 3.2.8 on 2022-04-01 16:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Matrix', '0005_webpagemodes'),
    ]

    operations = [
        migrations.AddField(
            model_name='webpagemodes',
            name='User',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, to='auth.user'),
            preserve_default=False,
        ),
    ]
