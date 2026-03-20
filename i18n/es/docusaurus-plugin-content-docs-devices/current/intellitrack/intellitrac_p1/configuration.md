---
slug: /intellitrack/intellitrac_p1/configuration
id: intellitrac_p1-configuration
sidebar_label: Configuration
title: Intellitrack - Intellitrac P1 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador personal Intellitrac P1 para reportar a Plaspy con ajustes de servidor prácticos y guía de instalación
keywords:
  - Configuración Intellitrack Intellitrac P1
  - Instalación Intellitrack para Plaspy
  - Configuración de servidor Intellitrac P1
  - Configurar rastreador GPS Intellitrac P1
  - Configuración de rastreadores Plaspy
  - Configuración de rastreador GPS personal
  - Configuración plataforma de rastreo de vehículos
  - Ajustes de servidor de dispositivo GPS
  - Integración de dispositivo de rastreo Plaspy
  - Compatibilidad Intellitrac P1
---

# Intellitrack - Intellitrac P1 Configuración

Esta página describe el contexto público de configuración para usar el rastreador personal Intellitrac P1 con Plaspy. Resume los ajustes prácticos de servidor y el flujo de trabajo necesario para apuntar el dispositivo a la plataforma Plaspy y validar que los reportes de ubicación sean visibles en la plataforma. El contenido está basado en la descripción del dispositivo y en los valores públicos de configuración de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta página como guía práctica para aplicar los valores públicos de Plaspy y consulte los materiales oficiales del fabricante para comandos o herramientas específicos del dispositivo.

## Resumen de configuración

Configurar el Intellitrac P1 para trabajar con Plaspy prepara el rastreador para enviar periódicamente datos de ubicación y estado a un endpoint central del servidor que opera Plaspy. El objetivo es asegurarse de que el dispositivo tenga conectividad de red, la dirección y el puerto de servidor correctos, y que el transporte elegido (UDP o TCP) esté configurado cuando la interfaz del dispositivo lo requiera.

- Apunte el rastreador al endpoint del servidor de Plaspy para que los datos entren en la plataforma
- Configure el puerto compartido de Plaspy para que el dispositivo se comunique por el canal correcto
- Seleccione el protocolo de transporte (UDP o TCP) si el dispositivo requiere una selección explícita
- Valide la conectividad y que el rastreador aparezca en Plaspy después de la configuración
- Confirme estado de batería, SIM y cobertura para asegurar reportes constantes

## Ajustes del servidor de Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: device may be configured using UDP or TCP on port 8888
- Plaspy behavior: Plaspy automatically detects the tracker protocol and uses the same port for all devices

Nota: Los valores de dominio, IP y puerto deben ingresarse tal como se muestran en la interfaz de configuración del dispositivo o mediante los comandos SMS/provisión que provea el fabricante.

## Requisitos típicos antes de la configuración

- Un dispositivo Intellitrac P1 cargado o con alimentación y acceso físico para configuración
- Una tarjeta SIM activa con plan de datos si el dispositivo usa conectividad GSM/GPRS, y señal móvil adecuada
- Acceso al método oficial de configuración de Intellitrack o al software del proveedor necesario para cambiar servidor y opciones de transporte
- Conocer los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) para introducirlos en el equipo
- Paciencia para permitir que el dispositivo obtenga fijación GPS y reporte la ubicación inicial después de la configuración
- Un medio para verificar el estado de reporte del dispositivo en Plaspy una vez aplicados los cambios

## Cómo se conecta este rastreador a Plaspy

Al configurarse para reportar a Plaspy, el Intellitrac P1 envía datos de ubicación y eventos del dispositivo al endpoint y puerto compartido de Plaspy. Plaspy ingiere esos mensajes y presenta la visibilidad y la telemetría del dispositivo en la plataforma, realizando la detección de protocolo en el lado del servidor.

- El rastreador envía mensajes uplink a d.plaspy.com o a 54.85.159.138
- Los mensajes se envían al puerto 8888, que es el puerto único usado por Plaspy para los dispositivos soportados
- El dispositivo puede usar UDP o TCP según la configuración y el soporte de firmware
- Plaspy detecta automáticamente el protocolo del rastreador y parsea los mensajes entrantes en consecuencia
- Tras reportes exitosos, el dispositivo se vuelve visible en Plaspy para monitoreo y generación de eventos

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Intellitrack o al software del fabricante para el Intellitrac P1.
2. En el campo de servidor u host del dispositivo ingrese la dirección de Plaspy d.plaspy.com o use la IP numérica 54.85.159.138 como alternativa.
3. Configure el puerto del dispositivo en 8888 para coincidir con el puerto compartido de Plaspy.
4. Seleccione UDP o TCP si el dispositivo requiere una elección explícita del transporte.
5. Aplique o guarde la configuración en el rastreador usando la herramienta del fabricante o el método de comandos correspondiente.
6. Reinicie el dispositivo si las instrucciones del fabricante indican que es necesario un reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy verificando que el rastreador aparezca en la plataforma y confirmando actualizaciones de ubicación recientes.

## Ejemplos de comandos de configuración

El Intellitrac P1 puede configurarse mediante utilidades del fabricante, herramientas web o comandos SMS según el firmware y las herramientas del proveedor. Los comandos exactos y su formato varían con el firmware y deben consultarse en la documentación oficial de Intellitrack o en la guía de configuración del proveedor.

Al usar cualquier interfaz de configuración, asegúrese de aplicar los siguientes valores:
- Server domain or IP: d.plaspy.com or 54.85.159.138
- Server port: 8888
- Transport option: UDP or TCP as required by the device interface

Si cuenta con una lista de comandos proporcionada por el fabricante o un formato de comandos SMS, aplique los valores de servidor y puerto en el orden que el dispositivo requiera y luego guarde o reinicie el rastreador. Plaspy detectará automáticamente el protocolo del rastreador una vez que los mensajes lleguen al servidor.

## Notas de configuración

- Las interfaces de firmware y configuración pueden diferir según lote de producción o versión de firmware; verifique siempre la documentación actual de Intellitrack antes de realizar cambios.
- Elija UDP o TCP en función del soporte del dispositivo y las condiciones de la red; UDP suele usarse para telemetría ligera, mientras que TCP puede seleccionarse si el dispositivo o la red requieren un transporte orientado a conexión.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que el uso consistente del puerto 8888 simplifica la configuración del servidor.
- Si la configuración por SMS está disponible por parte del fabricante, utilice los comandos SMS oficiales documentados por Intellitrack e incluya los ajustes del servidor Plaspy según corresponda.
- Verifique que el dispositivo tenga recepción GSM y GPS adecuada después de la configuración, especialmente si operará en espacios cerrados o en zonas remotas.

## Por qué usar Plaspy con esta configuración

Conectar el Intellitrac P1 a Plaspy ofrece a las organizaciones una forma centralizada de recibir y monitorear datos de ubicación desde rastreadores personales compactos. El uso del endpoint compartido de Plaspy y de la detección automática de protocolos elimina la necesidad de gestionar puertos de servidor específicos por dispositivo, lo que simplifica el despliegue en flotas mixtas y en entornos de seguimiento personal.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para instrucciones de configuración específicas del dispositivo, comportamiento de firmware y detalles del fabricante consulte los recursos oficiales de Intellitrack en https://www.systech-iot.com/ ya que los métodos y firmwares pueden cambiar con el tiempo.
