---
slug: /gnxis/8_wire/configuration
id: 8_wire-configuration
sidebar_label: Configuration
title: Gnxis - 8-wire Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Gnxis 8-wire y conectarlo al servidor Plaspy con pasos prácticos
keywords:
  - Configuración Gnxis 8-wire
  - Configuración Gnxis 8 hilos
  - Configuración rastreador Gnxis
  - Gnxis 8-wire Plaspy
  - Configuración rastreador GPS Gnxis
  - Configuración rastreador 8 hilos
  - Guía de configuración Gnxis
  - Configuración rastreo vehicular
  - Configuración seguimiento de flotas
  - Configuración servidor rastreador GPS
---

# Gnxis - Configuración 8-wire

Esta página recoge el contexto público de configuración para usar el rastreador GPS Gnxis 8-wire con Plaspy. Aquí encontrará los ajustes y comandos públicos prácticos que normalmente necesitará para direccionar el equipo al servidor Plaspy y que así el rastreador sea visible y reporte en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando están disponibles, esta página incluye los comandos SMS de Gnxis que se usan comúnmente para aplicar los ajustes necesarios y validar la conectividad.

## Resumen de la configuración

El objetivo de esta configuración es preparar el Gnxis 8-wire para que se comunique de forma confiable con Plaspy y verificar que los datos de ubicación y eventos lleguen a la plataforma. Muchos dispositivos Gnxis se pueden configurar mediante comandos SMS; los pasos a continuación reflejan los comandos SMS públicos que los fabricantes suelen publicar.

- Apuntar el rastreador al endpoint del servidor Plaspy para que los paquetes se entreguen a la plataforma.
- Configurar el APN del dispositivo, el modo GPRS y el transporte para habilitar el reporte por datos celulares.
- Aplicar ajustes específicos del dispositivo como zona horaria, intervalo de reporte y comportamiento de alarmas.
- Verificar la conectividad y confirmar que el rastreador aparece en Plaspy después de la configuración.
- Usar el método del fabricante o la interfaz SMS para cambiar de forma segura las credenciales por defecto si es necesario.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador; todos los dispositivos usan el mismo puerto para las conexiones al servidor

## Requisitos típicos antes de comenzar

- Un Gnxis 8-wire instalado y con batería, con acceso a la ranura de la tarjeta SIM.
- Una SIM activa con datos habilitados y capacidad de SMS para la configuración basada en SMS.
- Credenciales APN del operador móvil si son necesarias (APN, usuario, contraseña).
- Conocimiento de la contraseña por defecto del dispositivo para que acepte los comandos SMS de configuración.
- Acceso al número telefónico del dispositivo o a la herramienta de instalador que se use para enviar SMS, o al software de configuración del fabricante.
- Cobertura de red en una frecuencia LTE o GSM compatible para la conexión GPRS.

## Cómo se conecta este rastreador a Plaspy

El Gnxis 8-wire se configura para reportar posiciones y alertas al endpoint compartido de Plaspy y al puerto indicado. Una vez que el equipo está apuntando a Plaspy y el GPRS está activo, el rastreador envía actualizaciones de ubicación periódicas y mensajes de eventos que la plataforma ingiere y muestra.

- El equipo utiliza GPRS para abrir una conexión al dominio o IP del servidor Plaspy en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; seleccione el transporte que el equipo soporte.
- Plaspy detecta automáticamente el protocolo entrante del rastreador, por lo que los ajustes estándar de servidor son suficientes.
- Las actualizaciones de ubicación, eventos SOS y de alarma, y los mensajes de estado se reenvían a la plataforma Plaspy para su monitoreo.
- Todos los dispositivos soportados por Plaspy comparten la misma configuración de puerto, lo que simplifica la integración.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante, como la interfaz de comandos SMS de Gnxis o el software del proveedor.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 como servidor GPRS.
3. Configure el puerto del servidor en 8888 en la configuración del equipo.
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte y guarde la opción.
5. Configure el APN y las credenciales necesarias para datos móviles, luego aplique o guarde la configuración.
6. Reinicie o haga un ciclo de energía del equipo si el fabricante lo requiere para aplicar los cambios.
7. Valide que el equipo reporte a Plaspy comprobando la visibilidad en la plataforma y los últimos registros de posición o eventos.

## Comandos de configuración de ejemplo

El Gnxis 8-wire soporta configuración basada en SMS. A continuación se muestran los comandos SMS públicos provistos a modo de ejemplo por el fabricante. Reemplace los marcadores de posición y envíe cada comando al número del dispositivo usando una herramienta de SMS o un teléfono móvil. La contraseña por defecto del dispositivo en estos comandos es 123456. Use los comandos en el orden indicado cuando el orden sea importante.

- Reinicio de fábrica opcional (usar solo si es necesario)
```text
begin123456
```

- Ajustar zona horaria a UTC 0
```text
time zone123456 0
```

- Establecer el APN del operador móvil
```text
apn123456 [apn]
```
Explicación: reemplace [apn] con el APN de su operador.

- Establecer usuario y contraseña del APN
```text
up123456 [apnu] [apnp]
```
Explicación: reemplace [apnu] con el usuario del APN y [apnp] con la contraseña. Si no se requieren usuario ni contraseña, algunos operadores aceptan valores en blanco.

- Configurar el servidor GPRS a Plaspy usando IP y puerto
```text
adminip123456 54.85.159.138 8888
```
Esto apunta el dispositivo directamente a la IP y puerto del servidor Plaspy. También puede usar d.plaspy.com si el equipo soporta nombres de dominio.

- Ejemplo de comando para intervalo de actualización/reporte
```text
fix060s060s***n123456
```
Explicación: este comando de ejemplo define un patrón de reporte; siga la sintaxis del fabricante para personalizar intervalos.

- Habilitar transmisión del botón SOS
```text
SOSALM,ON,1#
```

- Cambiar a modo GPRS y establecer transporte a UDP o iniciar GPRS
```text
gprs123456,1,1
```
o
```text
gprs123456
```
Explicación: use la forma de gprs que requiera el firmware específico de Gnxis. Si su dispositivo solicita selección explícita de transporte, elija 1 para UDP o 0 para TCP cuando aplique según la guía del fabricante.

- Consultar la configuración actual
```text
check123456
```
Explicación: este comando solicita al equipo que devuelva por SMS los parámetros de configuración actuales.

Nota: la contraseña por defecto del dispositivo en estos ejemplos es 123456. Cambie la contraseña después de la configuración inicial si el fabricante provee un método seguro para hacerlo.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden alterar la sintaxis exacta de los SMS o los comandos disponibles; verifique el formato de los comandos con la documentación del dispositivo para su versión de firmware específica.
- La configuración por SMS es útil para instaladores sin acceso a una herramienta de configuración directa, pero se requiere una conexión de datos y APN confirmados para el reporte en Plaspy.
- Elija UDP o TCP según las opciones del firmware del dispositivo; ambos transportes se pueden usar con Plaspy pero deben coincidir con la configuración del equipo.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que facilita la configuración del servidor; establezca el puerto 8888 de forma consistente.
- Conserve los marcadores de posición como [apn], [apnu] y [apnp] al redactar los comandos SMS y reemplácelos por los valores de su operador.

## Por qué usar Plaspy con esta configuración

Usar el rastreador Gnxis 8-wire con Plaspy ofrece a administradores de flota y propietarios de vehículos un camino directo hacia la visibilidad en tiempo real y el monitoreo de eventos. Al apuntar el equipo al servidor compartido de Plaspy y confirmar la conectividad GPRS, usted centraliza el reporte de posiciones, SOS y alarmas para supervisión operativa y alertas.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Las especificaciones del fabricante, los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo; verifique los detalles de configuración específicos más recientes en el sitio oficial del fabricante.
