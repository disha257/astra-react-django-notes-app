from django.db import models
from cassandra.cqlengine import columns
from django_cassandra_engine.models import DjangoCassandraModel


class Post(DjangoCassandraModel):
    id = columns.UUID(primary_key=True)
    body = columns.Text()