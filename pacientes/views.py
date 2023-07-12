
from rest_framework import viewsets
from .seriallizer import PacienteSerializer
from .models import Paciente

class PacientesView(viewsets.ModelViewSet):
    serializer_class = PacienteSerializer
    queryset = Paciente.objects.all()

