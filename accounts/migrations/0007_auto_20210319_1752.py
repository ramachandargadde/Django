# Generated by Django 3.0.7 on 2021-03-19 12:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_auto_20210319_1229'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='tag',
            new_name='tags',
        ),
    ]