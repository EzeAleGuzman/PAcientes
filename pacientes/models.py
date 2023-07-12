from django.db import models


class Paciente(models.Model):
    
    nombre = models.CharField(max_length=80)
    apellido = models.CharField(max_length=80)
    habitacion = models.CharField(max_length=80)
    cama = models.CharField(max_length=80)
    OPCIONES_SERVICIO = [
        ('Polivalente', 'Polivalente'),
        ('Clinica Medica', 'Clinica Medica'),
        ('Guardia Adultos', 'Guarda de Adultos'),
    ]
    servicio = models.CharField(max_length=50, choices=OPCIONES_SERVICIO)

    
    def __str__(self):
        return f"{self.nombre} {self.apellido} {self.habitacion} {self.cama} {self.servicio}"